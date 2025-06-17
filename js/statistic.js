function animateNumbers(selector, valueAttribute) {
  const numbers = document.querySelectorAll(selector);

  const options = {
    root: null,
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const endValue = parseInt(el.dataset[valueAttribute]);
        let startValue = 0;
        const duration = 1000;
        const increment = endValue / (duration / 50);

        const interval = setInterval(() => {
          startValue += increment;
          if (startValue >= endValue) {
            clearInterval(interval);
            startValue = endValue;
          }
          el.innerText = Math.floor(startValue).toLocaleString('en-US', {
            useGrouping: true,
            minimumFractionDigits: 0
          }).replace(/,/g, '.');
        }, 50);

        observer.unobserve(el); 
      }
    });
  }, options);

  numbers.forEach(number => {
    observer.observe(number); 
  });
}

window.addEventListener('DOMContentLoaded', () => {
  animateNumbers('.stat-info h2', 'value');  // statistic-blue
  animateNumbers('.serv-num-box h2', 'value');  // statistic-servicedetail 
});
