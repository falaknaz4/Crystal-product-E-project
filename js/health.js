document.getElementById('filterSelect').addEventListener('change', function () {
  const filterValue = this.value;
  const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    if (filterValue === 'all' || category === filterValue) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});
