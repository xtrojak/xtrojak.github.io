/**
 * Photo gallery widget.
 *
 * Usage in a post:
 *   <link rel="stylesheet" href="{{ "/public/css/photo-gallery.css" | relative_url }}">
 *   <div class="photo-gallery">
 *     <img src="https://lh3.googleusercontent.com/pw/...=w1920-h1080" alt="…">
 *     <img src="https://lh3.googleusercontent.com/pw/...=w1920-h1080" alt="…">
 *   </div>
 *   <script src="{{ "/public/js/photo-gallery.js" | relative_url }}"></script>
 */
(function () {
  /* -c crops for square thumbs; full uses max-side only so portraits aren't cropped */
  var THUMB_SUFFIX = "=w160-h160-c";
  var FULL_SUFFIX = "=s2400";

  function withSize(url, suffix) {
    var base = String(url).replace(/=[^=]*$/, "");
    return base + suffix;
  }

  function createButton(className, label, ariaLabel) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = className;
    btn.setAttribute("aria-label", ariaLabel);
    btn.innerHTML = label;
    return btn;
  }

  function buildThumb(src, alt, index) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "photo-gallery__thumb";
    btn.dataset.index = String(index);
    btn.setAttribute("aria-label", "Show photo " + (index + 1));
    var img = document.createElement("img");
    img.src = withSize(src, THUMB_SUFFIX);
    img.alt = alt || "";
    img.loading = "lazy";
    btn.appendChild(img);
    return btn;
  }

  var activeLightbox = null;

  function ensureLightbox() {
    var root = document.querySelector(".photo-gallery-lightbox");
    if (root) return root;

    root = document.createElement("div");
    root.className = "photo-gallery-lightbox";
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.innerHTML = [
      '<div class="photo-gallery-lightbox__top">',
      '  <span class="photo-gallery-lightbox__counter"></span>',
      '  <button type="button" class="photo-gallery-lightbox__close" aria-label="Close">×</button>',
      "</div>",
      '<div class="photo-gallery-lightbox__stage">',
      '  <img alt="">',
      '  <div class="photo-gallery-lightbox__nav"></div>',
      "</div>",
      '<div class="photo-gallery-lightbox__thumbs"></div>'
    ].join("");

    var nav = root.querySelector(".photo-gallery-lightbox__nav");
    nav.appendChild(createButton("photo-gallery__btn", "‹", "Previous photo"));
    nav.appendChild(createButton("photo-gallery__btn", "›", "Next photo"));

    document.body.appendChild(root);

    root.querySelector(".photo-gallery-lightbox__close").addEventListener("click", closeLightbox);
    root.addEventListener("click", function (e) {
      if (e.target === root) closeLightbox();
    });
    nav.children[0].addEventListener("click", function (e) {
      e.stopPropagation();
      if (activeLightbox) activeLightbox.prev();
    });
    nav.children[1].addEventListener("click", function (e) {
      e.stopPropagation();
      if (activeLightbox) activeLightbox.next();
    });

    return root;
  }

  function openLightbox(gallery) {
    activeLightbox = gallery;
    var root = ensureLightbox();
    var thumbs = root.querySelector(".photo-gallery-lightbox__thumbs");
    thumbs.innerHTML = "";
    gallery.items.forEach(function (item, i) {
      var thumb = buildThumb(item.src, item.alt, i);
      thumb.addEventListener("click", function (e) {
        e.stopPropagation();
        gallery.goTo(i);
      });
      thumbs.appendChild(thumb);
    });
    root.classList.add("is-open");
    document.documentElement.style.overflow = "hidden";
    gallery.syncLightbox();
  }

  function closeLightbox() {
    var root = document.querySelector(".photo-gallery-lightbox");
    if (!root) return;
    root.classList.remove("is-open");
    document.documentElement.style.overflow = "";
    activeLightbox = null;
  }

  function initGallery(root) {
    if (root._photoGallery) return;

    var sourceImgs = Array.prototype.slice.call(root.querySelectorAll(":scope > img"));
    if (!sourceImgs.length) return;

    var items = sourceImgs.map(function (img) {
      return { src: img.getAttribute("src"), alt: img.getAttribute("alt") || "" };
    });
    sourceImgs.forEach(function (img) {
      img.remove();
    });

    var index = 0;

    var stage = document.createElement("div");
    stage.className = "photo-gallery__stage";
    stage.setAttribute("role", "img");

    var mainImg = document.createElement("img");
    mainImg.alt = "";
    stage.appendChild(mainImg);

    var nav = document.createElement("div");
    nav.className = "photo-gallery__nav";
    var prevBtn = createButton("photo-gallery__btn", "‹", "Previous photo");
    var nextBtn = createButton("photo-gallery__btn", "›", "Next photo");
    nav.appendChild(prevBtn);
    nav.appendChild(nextBtn);
    stage.appendChild(nav);

    var meta = document.createElement("div");
    meta.className = "photo-gallery__meta";
    var counter = document.createElement("span");
    var expand = createButton("photo-gallery__expand", "Fullscreen", "Open fullscreen");
    meta.appendChild(counter);
    meta.appendChild(expand);

    var thumbs = document.createElement("div");
    thumbs.className = "photo-gallery__thumbs";
    var thumbButtons = items.map(function (item, i) {
      var thumb = buildThumb(item.src, item.alt, i);
      thumb.addEventListener("click", function () {
        goTo(i);
      });
      thumbs.appendChild(thumb);
      return thumb;
    });

    root.appendChild(stage);
    root.appendChild(meta);
    root.appendChild(thumbs);

    function syncThumbs(list) {
      list.forEach(function (btn, i) {
        btn.classList.toggle("is-active", i === index);
      });
      var active = list[index];
      if (active && active.scrollIntoView) {
        active.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
      }
    }

    function render() {
      var item = items[index];
      mainImg.src = withSize(item.src, FULL_SUFFIX);
      mainImg.alt = item.alt;
      counter.textContent = index + 1 + " / " + items.length;
      stage.setAttribute("aria-label", item.alt || "Photo " + (index + 1));
      syncThumbs(thumbButtons);
      if (activeLightbox === api) api.syncLightbox();
    }

    function goTo(i) {
      index = (i + items.length) % items.length;
      render();
    }

    function next() {
      goTo(index + 1);
    }

    function prev() {
      goTo(index - 1);
    }

    var api = {
      items: items,
      next: next,
      prev: prev,
      goTo: goTo,
      syncLightbox: function () {
        var rootLb = ensureLightbox();
        var img = rootLb.querySelector(".photo-gallery-lightbox__stage img");
        var item = items[index];
        img.src = withSize(item.src, FULL_SUFFIX);
        img.alt = item.alt;
        rootLb.querySelector(".photo-gallery-lightbox__counter").textContent =
          index + 1 + " / " + items.length;
        var lbThumbs = rootLb.querySelectorAll(
          ".photo-gallery-lightbox__thumbs .photo-gallery__thumb"
        );
        syncThumbs(Array.prototype.slice.call(lbThumbs));
      }
    };

    prevBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      prev();
    });
    nextBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      next();
    });
    expand.addEventListener("click", function (e) {
      e.stopPropagation();
      openLightbox(api);
    });
    stage.addEventListener("click", function (e) {
      if (e.target.closest("button")) return;
      openLightbox(api);
    });

    root._photoGallery = api;
    render();
  }

  function boot() {
    document.querySelectorAll(".photo-gallery").forEach(initGallery);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && activeLightbox) {
      closeLightbox();
      return;
    }
    if (!activeLightbox) return;
    if (e.key === "ArrowRight") activeLightbox.next();
    if (e.key === "ArrowLeft") activeLightbox.prev();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.PhotoGallery = { init: boot };
})();
