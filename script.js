
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const nav = document.getElementById('navLinks');
  if (menu && nav) menu.addEventListener('click', () => nav.classList.toggle('open'));
  const svg = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#06101d"/><stop offset="1" stop-color="#c99a45"/></linearGradient></defs><rect width="1200" height="675" fill="url(#g)"/><text x="50%" y="50%" fill="white" font-family="Arial" font-size="54" font-weight="700" text-anchor="middle">TRIDENT</text></svg>`);
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
      if (!img.dataset.fallback) {
        img.dataset.fallback = '1';
        img.src = 'data:image/svg+xml;charset=utf-8,' + svg;
      }
    });
  });
});
