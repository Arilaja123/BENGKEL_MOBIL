// File: js/main.js

document.addEventListener("DOMContentLoaded", function () {
  // Highlight menu navbar saat hover (interaksi dasar)
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.opacity = "0.7";
    });
    link.addEventListener("mouseleave", () => {
      link.style.opacity = "1";
    });
  });

  // Scroll ke atas saat klik logo
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Alert sederhana ketika form booking dikirim
  const formBooking = document.querySelector("form");
  if (formBooking) {
    formBooking.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Booking berhasil dikirim. Terima kasih!");
      formBooking.reset();
    });
  }

  // Galeri interaktif (klik gambar tampil lebih besar - placeholder untuk pengembangan)
  const galeriImages = document.querySelectorAll(".galeri img");
  galeriImages.forEach(img => {
    img.addEventListener("click", () => {
      alert("Fitur zoom galeri akan ditambahkan nanti.");
    });
  });
});

function addToCart(nama, harga) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let found = cart.find(item => item.nama === nama);

  if (found) {
    found.qty += 1;
  } else {
    cart.push({ nama, harga, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  let notif = document.createElement("div");
  notif.textContent = nama + " berhasil ditambahkan ke keranjang!";
  notif.style.position = "fixed";
  notif.style.bottom = "20px";
  notif.style.right = "20px";
  notif.style.background = "#4caf50";
  notif.style.color = "white";
  notif.style.padding = "10px 15px";
  notif.style.borderRadius = "5px";
  notif.style.zIndex = "1000";
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 2000);
}

function toggleMenu() {
  document.getElementById("navbarNav").classList.toggle("show");
}