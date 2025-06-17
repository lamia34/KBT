document.querySelectorAll('.contact-title').forEach(title => {
    title.addEventListener('click', () => {
      const box = title.closest('.contact-box-model');
      const icon = title.querySelector('i');

      box.classList.toggle('active');

      if (box.classList.contains('active')) {
        icon.classList.remove('fa-angle-down');
        icon.classList.add('fa-angle-up');
      } else {
        icon.classList.remove('fa-angle-up');
        icon.classList.add('fa-angle-down');
      }
    });
});
  

