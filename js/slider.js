const video = document.getElementById('bgVideo');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    toggleBtn.textContent = 'Pause arxa fon video';
  } else {
    video.pause();
    toggleBtn.textContent = 'Play arxa fon video';
  }
});


//Global

$(document).ready(function() {
  var isHovering = false;
  var $languageSelector = $('.language-selector');
  var $initialElements = $('.initial-icon, .initial-text');
  var $currentLanguage = $('.current-language');

  $languageSelector.on('mouseenter', function() {
      isHovering = true;
      $initialElements.hide();
      $currentLanguage.fadeIn(100); 
  }).on('mouseleave', function() {
      isHovering = false;
      if (!$languageSelector.hasClass('open')) {
          $currentLanguage.fadeOut(100, function() { 
              $initialElements.show();
          });
      }
  });

  $('.language-selector .language-toggle').click(function() {
      $languageSelector.toggleClass('open');
      $('.language-selector .arrow-icon').toggleClass('open');
  });

  $('.language-selector .language-list li').click(function() {
      var lang = $(this).data('lang');
      $('.language-selector .lang-code').text(lang);
      $languageSelector.removeClass('open');
      $('.language-selector .arrow-icon').removeClass('open');
      $('.language-selector .language-list li').removeClass('selected');
      $(this).addClass('selected');

      $initialElements.hide();
      $currentLanguage.text(lang.toLowerCase()).fadeIn(100);
  });

  var defaultLang = $('.language-selector .language-list li:first-child').data('lang');
  if (defaultLang) {
      $('.language-selector .lang-code').text(defaultLang);
  }
});

// headerfooter
function loadHTML(selector, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    });
}


// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}
