// pilih hanya card layanan & koleksi
document.querySelectorAll(".layanan .card, .koleksi .card").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    replayAOS(el);
  });
});

// slider
const img = ["img/bg2.jpg", "img/jumbotron.png", "img/PERPUS.BG.jpg"];

let index = 0;
const jumbotron = document.querySelector(".jumbotron");

setInterval(() => {
  index = (index + 1) % img.length;
  jumbotron.style.backgroundImage = `url(${img[index]})`;
}, 5000);

// statistik

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll("#stats .counter");

  // helper: format dengan pemisah ribuan jika ingin
  const format = (n) => n.toLocaleString();

  function animateCounter(el, target, duration = 4000) {
    const start = 0;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * (target - start) + start);
      el.textContent = format(value);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = format(target);
      }
    }
    requestAnimationFrame(tick);
  }

  // IntersectionObserver: jalankan sekali saat element muncul
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const raw = el.textContent.trim();
          const target = parseInt(raw.replace(/[^0-9\-]/g, ""), 10) || 0; // aman kalau ada spasi
          animateCounter(el, target, 2000);
          observer.unobserve(el); // pastikan hanya sekali
        }
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((c) => io.observe(c));
});
