let currentSlideIndex = 0; 

const slides = document.querySelectorAll('.other-slide');
const slideCount = slides.length;
const counterElement = document.getElementById('other-slide-counter');


function updateSlideCounter() {
  counterElement.textContent = `${currentSlideIndex + 1} of ${slideCount}`;
}


function updateSlider() {
  slides.forEach(slide => slide.style.display = 'none');
  slides[currentSlideIndex].style.display = 'block';
  updateSlideCounter();
}


function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
  } else {
    currentSlideIndex = slideCount - 1; 
  }
  updateSlider();
}

function nextSlide() {
  if (currentSlideIndex < slideCount - 1) {
    currentSlideIndex++;
  } else {
    currentSlideIndex = 0;
  }
  updateSlider();
}


document.addEventListener('DOMContentLoaded', () => {
  updateSlider(); 
});
