const gridBtn = document.getElementById("gridViewBtn");
const listBtn = document.getElementById("listViewBtn");
const cardContainer = document.querySelector(".vacancy-grid-cards");

gridBtn.addEventListener("click", () => {
  cardContainer.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
  cardContainer.classList.add("list-view");
});