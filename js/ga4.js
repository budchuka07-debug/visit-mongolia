/**
 * Visit Mongolia Tours GA4 — Measurement ID G-XDG8KZWZCM
 * Loaded from <head> on every page.
 */
(function () {
  var MEASUREMENT_ID = "G-XDG8KZWZCM";
  if (window.__vmtGa4Loaded) return;
  window.__vmtGa4Loaded = true;

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", MEASUREMENT_ID);
})();
