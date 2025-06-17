// Dropdown Hover
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const container = dropdown.querySelector('.dropdown-container');
    const closeBtn = dropdown.querySelector('.dropdown-close');
  
    // Hover ile aç
    dropdown.addEventListener('mouseenter', () => {
      container.style.display = 'block';
    });
  
    // Fare çıkınca kapan
    dropdown.addEventListener('mouseleave', () => {
      container.style.display = 'none';
    });
  
    // X butonuna basınca kapan
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        container.style.display = 'none';
      });
    }
  });