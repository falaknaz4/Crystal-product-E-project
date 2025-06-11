
  document.getElementById('filterDropdown').addEventListener('change', function () {
    const filterValue = this.value;
    const cards = document.querySelectorAll('.container .row .col-sm-12, .container .row .col-md-4, .container .row .col-lg-3');

    cards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filterValue === 'all' || category === filterValue) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });

