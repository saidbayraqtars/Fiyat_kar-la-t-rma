
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === 'admin' && password === 'admin123') {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'admin.html';
  } else {
    const error = document.getElementById('login-error');
    error.textContent = 'Hatalı kullanıcı adı veya şifre!';
  }
}

function logout() {
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'login.html';
}

function handleProductSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('product-name').value;
  const image = document.getElementById('product-image').value;
  const category = document.getElementById('product-category').value;
  const pricesInput = document.getElementById('product-prices').value;

  const prices = pricesInput.split(',').reduce((acc, pair) => {
    const [site, price] = pair.split(':').map(s => s.trim());
    acc[site] = price;
    return acc;
  }, {});

  const product = { name, image, prices };

  const existingProducts = JSON.parse(localStorage.getItem('products')) || {};
  existingProducts[category] = existingProducts[category] || [];
  const index = existingProducts[category].findIndex(p => p.name === name);
  if (index > -1) {
    existingProducts[category][index] = product;
    showMessage('Ürün güncellendi!');
  } else {
    existingProducts[category].push(product);
    showMessage('Ürün eklendi!');
  }

  localStorage.setItem('products', JSON.stringify(existingProducts));
  event.target.reset();
}

function showMessage(message) {
  const messageElement = document.getElementById('product-message');
  messageElement.textContent = message;
  setTimeout(() => (messageElement.textContent = ''), 3000);
}

// Giriş kontrolü (admin.html için)
window.onload = function () {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (!isLoggedIn && window.location.pathname.includes('admin.html')) {
    window.location.href = 'login.html';
  }
};
