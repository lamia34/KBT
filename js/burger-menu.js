// Burger Menu Open-Close
const burgerOpen = document.getElementById('burger-icon-open');
const burgerClose = document.getElementById('burger-icon-close');
const burgerMenu = document.getElementById('burger-menu');

burgerOpen.addEventListener('click', () => {
  burgerMenu.classList.add('burger-active');
  burgerOpen.style.display = 'none';
  burgerClose.style.display = 'block';
  document.body.classList.add('no-scroll'); 
});

burgerClose.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-active');
  burgerOpen.style.display = 'block';
  burgerClose.style.display = 'none';
  document.body.classList.remove('no-scroll'); 
});


// Burger Menu TWO Open-Close
const burgerTwoOpen = document.getElementById('burger-icon-two-open');
const burgerTwoClose = document.getElementById('burger-icon-two-close');
const burgerTwoMenu = document.getElementById('burger-menu-two');

burgerTwoOpen.addEventListener('click', () => {
  burgerTwoMenu.classList.add('burger-two-active');
});

burgerTwoClose.addEventListener('click', () => {
  burgerTwoMenu.classList.remove('burger-two-active');
  
});

// Plus Menu
document.querySelectorAll('.menu-two-con-li > a').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault(); 
    const parentLi = item.parentElement;
    parentLi.classList.toggle('plus-active');
  });
});


// Burger Menu THREE Open-Close
const burgerThreeOpen = document.getElementById('burger-icon-three-open');
const burgerThreeClose = document.getElementById('burger-icon-three-close');
const burgerThreeMenu = document.getElementById('burger-menu-three');

burgerThreeOpen.addEventListener('click', () => {
  burgerThreeMenu.classList.add('burger-three-active');
});

burgerThreeClose.addEventListener('click', () => {
  burgerThreeMenu.classList.remove('burger-three-active');
});
