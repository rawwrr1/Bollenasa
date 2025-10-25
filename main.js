// === LOAD NAVBAR ===
function loadNavbar() {
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Tambahkan CSS navbar
      const navbarCSS = document.createElement("link");
      navbarCSS.rel = "stylesheet";
      navbarCSS.href = "navbar.css";
      document.head.appendChild(navbarCSS);
    })
    .catch(err => console.error("Gagal memuat navbar:", err));
}

// === LOAD HERO SECTION ===
function loadHero() {
  fetch("hero.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("hero-placeholder").innerHTML = data;

      // Tambahkan CSS hero
      const heroCSS = document.createElement("link");
      heroCSS.rel = "stylesheet";
      heroCSS.href = "hero.css";
      document.head.appendChild(heroCSS);

      // Tambahkan interaksi tombol Order Now
      const btnOrder = document.querySelector(".btn-order");
      if (btnOrder) {
        btnOrder.addEventListener("click", () => {
          // Arahkan ke halaman order (bisa disesuaikan)
          window.location.href = "order.html";
        });
      }
    })
    .catch(err => console.error("Gagal memuat hero section:", err));
}

// === FUNGSI UTAMA ===
document.addEventListener("DOMContentLoaded", () => {
  // Load semua komponen
  if (document.getElementById("navbar-placeholder")) loadNavbar();
  if (document.getElementById("hero-placeholder")) loadHero();
});
