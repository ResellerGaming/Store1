// Toggle musik
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const icon = document.getElementById("musicIcon");
  const toggle = document.querySelector(".music-toggle");

  if (music.paused) {
    music.play();
    toggle.classList.add("playing");
  } else {
    music.pause();
    toggle.classList.remove("playing");
  }
}

// Toggle menu hamburger
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

// Tutup iklan
function closeAd() {
  document.getElementById("adPopup").style.display = "none";
}

// Tampilkan iklan saat halaman dimuat
window.onload = () => {
  document.getElementById("adPopup").style.display = "block";
};

// Load produk best seller dan flash sale di halaman utama
fetch('data/products.json')
  .then(res => res.json())
  .then(data => {
    const bestContainer = document.getElementById("bestSellerContainer");
    const flashContainer = document.getElementById("flashSaleContainer");

    const best = data.filter(p => p.isBestSeller);
    const flash = data.filter(p => p.isFlashSale);

    best.forEach(p => bestContainer.appendChild(createProductCard(p)));
    flash.forEach(p => flashContainer.appendChild(createProductCard(p)));
  });

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>Rp${product.price.toLocaleString()}</p>
  `;
  return card;
}
