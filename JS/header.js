function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
//HeaderFixed
const header = document.querySelector(".header");
const headerTop = document.querySelector(".header-top");
const headerImage = document.querySelector(".header-image-item")
const headerInputItem = document.querySelector(".header-input-item"); 
const headerIconItem = document.querySelectorAll(".header-icon-item");
const headerHeight = header && header.offsetHeight;
const headerTopHeight = headerTop && headerTop.offsetHeight;
window.addEventListener("scroll", debounceFn(function(e) {
  const scrollY = window.pageYOffset;
  if (scrollY >= headerTopHeight) {
    headerImage.style.maxWidth = `${90}px`;
    headerInputItem.style.border = "1px solid #333";
    [...headerIconItem].forEach((item) => item.style.color = "#333");
    header && header.classList.add("is-fixed")
    document.body.style.paddingTop = `${headerHeight}px`;
  } else {
    headerImage.style.maxWidth = `${134}px`;
    headerInputItem.style.border = "none";
    [...headerIconItem].forEach((item) => item.style.color = "#756f63");
    header && header.classList.remove("is-fixed")
    document.body.style.paddingTop = 0;
  }
}, 50));
  const headerLink = document.querySelectorAll(".header-nav-link");
  [...headerLink].forEach(item => item.addEventListener("click", function(e) {
    e.target.style.color = "#8b3a00"
  }))
  