  // sort

  function filterProjects(element) {
    // Aktiv class təmizlənir və yenisi əlavə olunur
    document.querySelectorAll('.project-type').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
  
    // Filter dəyəri alınıb kiçik hərflərə çevrilir
    const filter = element.getAttribute('data-filter').toLowerCase().trim();
    const cards = document.querySelectorAll('.project-card');
  
    cards.forEach(card => {
      const projectNameElement = card.querySelector('.project-name');
      
      if (!projectNameElement) return;
  
      // Mətni təmizləyirik: sətirsonu, boşluqlar, case fərqi
      const projectName = projectNameElement.innerText.replace(/\s+/g, ' ').toLowerCase().trim();
  
      // Filtrlə uyğun gəlirsə göstər, yoxdursa gizlət
      if (filter === 'all' || projectName === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  

// SVG icon
document.querySelectorAll('.svg-proj-icons svg').forEach(function(icon) {
  icon.addEventListener('click', function() {
    let projectContainer = document.querySelector('.project4');
    
    if (icon.classList.contains('layout-2')) {
      projectContainer.classList.add('layout-2');
      projectContainer.classList.remove('layout-1');
    } else {
      projectContainer.classList.add('layout-1');
      projectContainer.classList.remove('layout-2');
    }
  });
});

