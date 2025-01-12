
function selectCategory(category) {
  localStorage.setItem('selectedCategory', category);
  window.location.href = 'compare.html';
}

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}
