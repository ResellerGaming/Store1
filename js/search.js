function liveSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const resultsContainer = document.getElementById("searchResultsContainer");
  if (!resultsContainer) return;

  fetch('data/products.json')
    .then(res => res.json())
    .then(data => {
      const filtered = data.filter(p => p.name.toLowerCase().includes(query));
      resultsContainer.innerHTML = "";
      filtered.forEach(p => resultsContainer.appendChild(createProductCard(p)));
    });
}

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

// --- flashsale.js (untuk flashsale.html) ---
fetch('data/produk.json')
  .then(r => r.json())
  .then(data => {
    // asumsi ada property "flashsale: true" pada JSON
    const list = data.filter(p => p.flashsale);
    renderProduk(list); // fungsi render sama seperti search.js
    // search & filter tetap berfungsi di list ini
  });
