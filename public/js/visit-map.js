/**
 * Visit map widget (Leaflet).
 *
 * Usage:
 *   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
 *   <link rel="stylesheet" href="{{ "/public/css/visit-map.css" | relative_url }}">
 *   <div class="visit-map">
 *     <script type="application/json" class="visit-map__data">
 *       [
 *         {"date":"2026-11-02","title":"Verano","lat":41.9,"lng":12.52,"anchor":"#verano"},
 *         {"type":"stay","title":"Via Example, 1","lat":41.89,"lng":12.48,"anchor":"#ubytovanie"}
 *       ]
 *     </script>
 *   </div>
 *   <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
 *   <script src="{{ "/public/js/visit-map.js" | relative_url }}"></script>
 *
 * Interaction:
 *   - List click: zoom/center + highlight map & list; popup with "Čítať viac"
 *   - Map pin click: highlight both + scroll list to the item; same popup
 *   - Empty map click: clear selection
 *   - Jump to article only via the popup link
 *
 * Places with type "stay" appear only on the map (unnumbered) and are omitted
 * from the side list. Visit numbering ignores stay pins.
 */
(function () {
  var FOCUS_ZOOM = 15;

  var STAY_ICON_HTML =
    '<div class="visit-map__marker visit-map__marker--stay" aria-hidden="true">' +
    '<svg viewBox="0 0 24 24" width="14" height="14" focusable="false">' +
    '<path fill="currentColor" d="M12 3.2 3.5 10.2V21h5.5v-6.5h6V21H20.5V10.2L12 3.2z"/>' +
    "</svg></div>";

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

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function isStay(place) {
    return place && place.type === "stay";
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

  function popupHtml(place) {
    var date = formatDate(place.date);
    var title = escapeHtml(place.title || (isStay(place) ? "Ubytovanie" : "Miesto"));
    var href = escapeHtml(place.anchor || "#");
    var html = '<div class="visit-map__popup">';
    html += '<div class="visit-map__popup-title">' + title + "</div>";
    if (date) {
      html += '<div class="visit-map__popup-date">' + escapeHtml(date) + "</div>";
    }
    if (place.anchor) {
      html +=
        '<a class="visit-map__read" href="' + href + '">Čítať viac</a>';
    }
    html += "</div>";
    return html;
  }

  function bindReadLink(marker, place) {
    marker.on("popupopen", function () {
      var node = marker.getPopup() && marker.getPopup().getElement();
      if (!node) return;
      var link = node.querySelector(".visit-map__read");
      if (!link || link._visitMapBound) return;
      link._visitMapBound = true;
      link.addEventListener("click", function (e) {
        e.preventDefault();
        scrollToAnchor(place.anchor);
      });
    });
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
    var visitMarkers = [];
    var stayMarkers = [];
    var listItems = [];
    var visits = [];
    var activeVisit = -1;
    var activeStay = -1;
    var suppressMapClick = false;

    function clearActive() {
      visitMarkers.forEach(function (m) {
        var el = m.getElement && m.getElement();
        if (el) el.classList.remove("is-active");
      });
      stayMarkers.forEach(function (m) {
        var el = m.getElement && m.getElement();
        if (el) el.classList.remove("is-active");
      });
      listItems.forEach(function (btn) {
        btn.classList.remove("is-active");
      });
      activeVisit = -1;
      activeStay = -1;
      map.closePopup();
    }

    function setActiveVisit(index) {
      clearActive();
      activeVisit = index;
      var marker = visitMarkers[index];
      if (marker) {
        var el = marker.getElement && marker.getElement();
        if (el) el.classList.add("is-active");
      }
      if (listItems[index]) listItems[index].classList.add("is-active");
    }

    function setActiveStay(index) {
      clearActive();
      activeStay = index;
      var marker = stayMarkers[index];
      if (marker) {
        var el = marker.getElement && marker.getElement();
        if (el) el.classList.add("is-active");
      }
    }

    function openMarkerPopup(marker, autoPan) {
      if (!marker) return;
      var popup = marker.getPopup();
      if (popup) popup.options.autoPan = autoPan !== false;
      marker.openPopup();
    }

    function whenMapSettled(callback) {
      var done = false;
      function finish() {
        if (done) return;
        done = true;
        map.off("moveend", finish);
        callback();
      }
      map.once("moveend", finish);
      setTimeout(finish, 450);
    }

    function centerOn(lat, lng, callback) {
      var target = L.latLng(lat, lng);
      whenMapSettled(function () {
        // Keep the pin at the true center; do not let popup autoPan nudge it.
        map.setView(target, FOCUS_ZOOM, { animate: false });
        if (callback) callback();
      });
      map.setView(target, FOCUS_ZOOM, { animate: true });
    }

    function selectVisit(index, opts) {
      var place = visits[index];
      var marker = visitMarkers[index];
      if (!place || !marker) return;

      opts = opts || {};
      setActiveVisit(index);

      if (opts.scrollList && listItems[index]) {
        listItems[index].scrollIntoView({
          block: "nearest",
          behavior: "smooth"
        });
      }

      if (opts.zoom) {
        centerOn(place.lat, place.lng, function () {
          openMarkerPopup(marker, false);
        });
        return;
      }

      openMarkerPopup(marker, true);
    }

    function selectStay(index, place) {
      var marker = stayMarkers[index];
      if (!place || !marker) return;
      setActiveStay(index);
      openMarkerPopup(marker, true);
    }

    places.forEach(function (place) {
      bounds.push([place.lat, place.lng]);

      if (isStay(place)) {
        var stayIndex = stayMarkers.length;
        var stayIcon = L.divIcon({
          className: "",
          html: STAY_ICON_HTML,
          iconSize: [26, 26],
          iconAnchor: [13, 13]
        });
        var stayMarker = L.marker([place.lat, place.lng], {
          icon: stayIcon,
          title: place.title || "Stay",
          zIndexOffset: -100
        });
        stayMarker.bindPopup(popupHtml(place), {
          className: "visit-map__leaflet-popup",
          closeButton: true,
          autoPan: true
        });
        bindReadLink(stayMarker, place);
        stayMarker.addTo(map);
        stayMarker.on("click", function () {
          suppressMapClick = true;
          selectStay(stayIndex, place);
        });
        stayMarkers.push(stayMarker);
        return;
      }

      var visitIndex = visits.length;
      var n = visitIndex + 1;
      visits.push(place);

      var icon = L.divIcon({
        className: "",
        html: '<div class="visit-map__marker">' + n + "</div>",
        iconSize: [26, 26],
        iconAnchor: [13, 13]
      });

      var marker = L.marker([place.lat, place.lng], {
        icon: icon,
        title: place.title
      });
      marker.bindPopup(popupHtml(place), {
        className: "visit-map__leaflet-popup",
        closeButton: true,
        autoPan: true
      });
      bindReadLink(marker, place);
      marker.addTo(map);
      marker.on("click", function () {
        suppressMapClick = true;
        selectVisit(visitIndex, { scrollList: true });
      });
      visitMarkers.push(marker);

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
        escapeHtml(place.title || "Visit " + n) +
        "</span></span>";
      btn.addEventListener("click", function () {
        selectVisit(visitIndex, { zoom: true });
      });
      li.appendChild(btn);
      list.appendChild(li);
      listItems.push(btn);
    });

    map.on("click", function () {
      if (suppressMapClick) {
        suppressMapClick = false;
        return;
      }
      clearActive();
    });

    if (bounds.length === 1) {
      map.setView(bounds[0], 13);
    } else {
      map.fitBounds(bounds, { padding: [28, 28], maxZoom: 12 });
    }

    setTimeout(function () {
      map.invalidateSize();
      if (bounds.length > 1) map.fitBounds(bounds, { padding: [28, 28], maxZoom: 12 });
    }, 100);

    root._visitMap = {
      map: map,
      places: places,
      visits: visits,
      selectVisit: selectVisit,
      clearActive: clearActive
    };
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
