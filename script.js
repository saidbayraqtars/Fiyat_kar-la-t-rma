
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
}

window.onload = function () {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }

  // Ürün listesi ve admin giriş kontrolü
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  const categoryTitle = document.getElementById('category-title');
  const productsDiv = document.getElementById('products');

  const products = JSON.parse(localStorage.getItem('products')) || {
    laptops: [],
    monitors: [],
    mice: []
  };

  if (category && products[category]) {
    categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    products[category].forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = "product";
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto; border-radius: 5px;">
        <p><strong>${product.name}</strong></p>
        <ul>
          ${Object.entries(product.prices)
            .map(([site, price]) => `<li>${site}: ${price}</li>`)
            .join('')}
        </ul>
      `;
      productsDiv.appendChild(productDiv);
    });
  }
};
