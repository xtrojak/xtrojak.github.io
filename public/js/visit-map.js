/**
 * Visit map widget (Leaflet).
 *
 * Usage:
 *   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
 *   <link rel="stylesheet" href="{{ "/public/css/visit-map.css" | relative_url }}">
 *   <div class="visit-map">
 *     <script type="application/json" class="visit-map__data">
 *       [
 *         {"date":"2026-11-02","title":"Verano","lat":41.9,"lng":12.52,"anchor":"#verano"}
 *       ]
 *     </script>
 *   </div>
 *   <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
 *   <script src="{{ "/public/js/visit-map.js" | relative_url }}"></script>
 */
(function () {
  function parsePlaces(root) {
    var node = root.querySelector("script.visit-map__data");
    if (!node) return [];
    try {
      var data = JSON.parse(node.textContent);
      return Array.isArray(data) ? data : [];
    } catch (e) {
      console.warn("visit-map: invalid JSON", e);
      return [];
    }
  }

  function formatDate(iso) {
    if (!iso) return "";
    var parts = String(iso).split("-");
    if (parts.length !== 3) return iso;
    return parts[2] + "." + parts[1] + "." + parts[0];
  }

  function scrollToAnchor(anchor) {
    if (!anchor) return;
    var id = String(anchor).replace(/^#/, "");
    var el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (history && history.replaceState) {
      history.replaceState(null, "", "#" + id);
    }
  }

  function initMap(root) {
    if (root._visitMap || typeof L === "undefined") return;

    var places = parsePlaces(root).filter(function (p) {
      return p && typeof p.lat === "number" && typeof p.lng === "number";
    });
    if (!places.length) return;

    var layout = document.createElement("div");
    layout.className = "visit-map__layout";

    var canvas = document.createElement("div");
    canvas.className = "visit-map__canvas";

    var list = document.createElement("ol");
    list.className = "visit-map__list";

    layout.appendChild(canvas);
    layout.appendChild(list);

    Array.prototype.slice.call(root.childNodes).forEach(function (n) {
      if (n.nodeType === 1 && n.tagName === "SCRIPT") return;
      root.removeChild(n);
    });
    root.appendChild(layout);

    var map = L.map(canvas, {
      scrollWheelZoom: false,
      attributionControl: true
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var bounds = [];
    var markers = [];
    var items = [];
    var activeIndex = -1;

    function setActive(index) {
      activeIndex = index;
      markers.forEach(function (m, i) {
        var el = m.getElement && m.getElement();
        if (el) el.classList.toggle("is-active", i === index);
      });
      items.forEach(function (btn, i) {
        btn.classList.toggle("is-active", i === index);
      });
    }

    function goTo(index) {
      var place = places[index];
      if (!place) return;
      setActive(index);
      map.panTo([place.lat, place.lng], { animate: true });
      scrollToAnchor(place.anchor);
    }

    places.forEach(function (place, index) {
      var n = index + 1;
      var icon = L.divIcon({
        className: "",
        html: '<div class="visit-map__marker">' + n + "</div>",
        iconSize: [26, 26],
        iconAnchor: [13, 13]
      });

      var marker = L.marker([place.lat, place.lng], { icon: icon, title: place.title });
      marker.addTo(map);
      marker.on("click", function () {
        goTo(index);
      });
      markers.push(marker);
      bounds.push([place.lat, place.lng]);

      var li = document.createElement("li");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "visit-map__item";
      btn.innerHTML =
        '<span class="visit-map__num">' +
        n +
        '</span><span class="visit-map__meta">' +
        '<span class="visit-map__date">' +
        formatDate(place.date) +
        "</span>" +
        '<span class="visit-map__title">' +
        (place.title || "Visit " + n) +
        "</span></span>";
      btn.addEventListener("click", function () {
        goTo(index);
      });
      li.appendChild(btn);
      list.appendChild(li);
      items.push(btn);
    });

    if (bounds.length === 1) {
      map.setView(bounds[0], 13);
    } else {
      map.fitBounds(bounds, { padding: [28, 28], maxZoom: 12 });
    }

    // Leaflet needs a redraw after layout settles
    setTimeout(function () {
      map.invalidateSize();
      if (bounds.length > 1) map.fitBounds(bounds, { padding: [28, 28], maxZoom: 12 });
    }, 100);

    root._visitMap = { map: map, places: places, goTo: goTo };
  }

  function boot() {
    document.querySelectorAll(".visit-map").forEach(initMap);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.VisitMap = { init: boot };
})();
