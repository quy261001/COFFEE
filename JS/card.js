//category
const globalcardView = document.querySelector(".globalcard-production");
const globalcardCategory = document.querySelector(".globalcard-category");
const icon = document.querySelector(".icon")
globalcardView.addEventListener('click', function(e) {
  globalcardCategory.classList.toggle("is-show");
  icon.classList.toggle("fa-plus")
  icon.classList.toggle("fa-minus")
})