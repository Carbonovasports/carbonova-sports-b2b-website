(function () {
  'use strict';
  var video = document.querySelector('.home-hero-video');
  if (!video) return;
  var desktop = window.matchMedia('(min-width: 768px)');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  function loadDesktopVideo() {
    if (!desktop.matches || reducedMotion.matches || (connection && connection.saveData)) return;
    if (video.dataset.loaded === 'true') return;
    video.querySelectorAll('source[data-src]').forEach(function (source) {
      source.src = source.dataset.src;
      source.removeAttribute('data-src');
    });
    video.dataset.loaded = 'true';
    video.load();
    video.play().then(function () {
      video.classList.add('is-playing');
    }).catch(function () {
      /* The optimized poster remains visible when autoplay is unavailable. */
    });
  }

  if (document.readyState === 'complete') loadDesktopVideo();
  else window.addEventListener('load', loadDesktopVideo, { once: true });
}());
