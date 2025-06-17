function scrollButtons(amount) {
    const container = document.getElementById('scrollable-buttons');
    container.scrollLeft += amount;
  }



  // Projectdetail4
  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 4,
      slideShadows: true
    },
    loop: true,
    autoplay: {
      delay: 5000,            
      disableOnInteraction: false, 
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    breakpoints: {
      560: {
        slidesPerView: 2.5
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 3
      }
    }
  });



    // Modal elementləri
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".modal-close");
  
    // Bütün swiper şəkillərinə qulaq as
    document.querySelectorAll(".slide-content img").forEach(img => {
      img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
      });
    });
  
    // X düyməsi
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // Modal-a kliklədikdə (arxa fon) bağlansın
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });