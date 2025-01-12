
function selectCategory(category) {
  localStorage.setItem('selectedCategory', category);
  window.location.href = 'compare.html';
}
