function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-info h2');
    
    const options = {
      root: null, 
      threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const endValue = parseInt(el.dataset.value);
          let startValue = 0;
          const duration = 1000; 
          const increment = endValue / (duration / 50); 

          const interval = setInterval(() => {
            startValue += increment;
            if (startValue >= endValue) {
              clearInterval(interval);
              startValue = endValue;
            }
            el.innerText = Math.floor(startValue).toLocaleString('az-AZ');
          }, 50);

          observer.unobserve(el); 
        }
      });
    }, options);

    statNumbers.forEach(number => {
      observer.observe(number);
    });
  }

  window.addEventListener('DOMContentLoaded', animateNumbers);

