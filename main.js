const elMenuBtn = document.querySelector(".js-menu-btn");

function menuBtnFn(evt) {
  evt.preventDefault();
  elMenuBtn.closest(".site-header").classList.toggle("open-btn");
  document.body.classList.toggle("unscrole");
}

elMenuBtn.addEventListener("click", menuBtnFn);
