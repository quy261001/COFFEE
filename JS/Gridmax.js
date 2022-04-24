//Grid View max
const gridView = document.querySelector(".globals-choose-row");
const gridList = document.querySelector(".globals-choose-list");
const gridGlobal = document.querySelector(".globals-grid");
const titleView = document.querySelector(".globals-title-row");
const titleList  = document.querySelector(".globals-title-list");
const globalTopImage = document.querySelector(".global-top-image");
gridView.addEventListener("click", function(e) {
  if (e.target.matches(".globals-choose-row") || e.target.matches(".globals-title-row")) {
    globalTopImage.style.height = `${250}vh`;
    gridGlobal.style.gridTemplateColumns = "repeat(4, 1fr)";
  }
})

gridList.addEventListener("click", function(e) {
  if (e.target.matches(".globals-choose-list") || e.target.matches(".globals-title-row")) {      
    globalTopImage.style.height = `${430}vh`;
    gridGlobal.style.gridTemplateColumns = "repeat(2, 1fr)";
  }
})

titleView.addEventListener("click", function(e) {
  if (e.target.matches(".globals-title-row")) {
    globalTopImage.style.height = `${250}vh`;
    gridGlobal.style.gridTemplateColumns = "repeat(4, 1fr)";
  }
})

titleList.addEventListener("click", function(e) {
  if (e.target.matches(".globals-title-list")) {
    globalTopImage.style.height = `${430}vh`;
    gridGlobal.style.gridTemplateColumns = "repeat(2, 1fr)";
  }
})