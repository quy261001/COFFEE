const flavorsCard = document.querySelectorAll(".global-card-image");
const globalTitle = document.querySelectorAll(".global-card-title");
 [...globalTitle].forEach(item => console.log(item));
[...flavorsCard].forEach(item => item.addEventListener("click",function(e) {
  // console.log(flavorsCard)
  const image = e.target.getAttribute("srcset");
  const template = `<div class="globals-modal"> 
  <div class="globals-view">
    <div class="globalcard-container">
      <div class="globalcard-left"> <img class="globalcard-image" src="${image}" alt=""/></div>
      <div class="globalcard-right"> 
        <div class="globalcard-title">89’er Blend Coffee</div>
        <div class="globalcard-information">SKU: PRD-3023</div>
        <div class="globalcard-price">$14.25 – $14.75</div>
        <div class="globalcard-inputQuantity">
          <input class="globalcard-inputNumber" type="number" value="1" min="0" max="500"/><span>Quantity </span>
        </div>
        <button class="globalcard-btn">ADD TO CART</button>
        <div class="globalcard-production"> 
          <div class="globalcard-production-info">PRODUCT INFO</div>
          <div class="globalcard-icon"><i class="fa fa-plus icon" aria-hidden="true"></i></div>
        </div>
        <div class="globalcard-category">
          <div class="globalcard-category-content">1 Pound Bag | 89’er Blend®</div>
        </div>
      </div>
      <div class="globals-close-icon">
         <i class="globals-close fa fa-times" aria-hidden="true"></i></div>
    </div>
  </div>
</div>`
document.body.insertAdjacentHTML("beforeend",template);
}))

document.body.addEventListener("click", function(e) {
  if (e.target.matches(".globals-close")) {
    const modal = e.target.parentNode.parentNode.parentNode.parentNode;
    modal.parentNode.removeChild(modal);
    // modal.classList.add("is-none");
  }
})
document.body.addEventListener("click", function(e) {
  if (e.target.matches(".globalcard-production")) {
    const globalCategory = document.querySelector(".globalcard-category");
    globalCategory.classList.toggle("is-show");
  }
})