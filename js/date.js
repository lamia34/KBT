const title = "TARİXİMİZ";
const container = document.getElementById("animated-title");

[...title].forEach((letter, index) => {
  const span = document.createElement("span");
  span.textContent = letter;
  span.style.animationDelay = `${index * 0.5}s`;
  container.appendChild(span);
});



const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".h-n-ul .date");
const navUl = document.querySelector(".h-n-ul");

function activateNavItem() {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(li => {
        li.classList.remove("active");
        if (li.getAttribute("data-target") === current) {
            li.classList.add("active");

            // Aktiv elementin yuxarı mövqeyini CSS dəyişəninə tətbiq et
            if (navUl) {
                navUl.style.setProperty('--active-line-top', `${li.offsetTop}px`);
                navUl.style.setProperty('--active-line-height', `${li.offsetHeight}px`);
            }
        }
    });
}

window.addEventListener("scroll", activateNavItem);