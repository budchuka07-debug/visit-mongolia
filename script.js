
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  let currentSlide = 0;
  function showNextSlide() {
    if (!slides.length) return;
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }
  if (slides.length > 1) setInterval(showNextSlide, 4000);

  const svg = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#06101d"/><stop offset="1" stop-color="#c99a45"/></linearGradient></defs><rect width="1200" height="675" fill="url(#g)"/></svg>`);
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      if (!img.dataset.fallback) {
        img.dataset.fallback = "1";
        img.src = "data:image/svg+xml;charset=utf-8," + svg;
      }
    });
  });
});
