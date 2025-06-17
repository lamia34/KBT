let currentIndex = 0;
const slides = document.querySelectorAll('.sliderhome .slider .slide');
const dots = document.querySelectorAll('.sliderhome .slider .dots .dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
  });

  slides[index].classList.add('active');
  dots[index].classList.add('active');
}


function autoSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// İlk slide göster
showSlide(currentIndex);

setInterval(autoSlide, 5000);
