let burgerMenu = document.querySelector(".burger-menu");
let btnBurgerMenu = document.querySelector(".burger-menu__button");

function burgerChangeVision() {
  burgerMenu.classList.toggle("burger-menu__active");
}

btnBurgerMenu.addEventListener("click", () => {
  burgerChangeVision();
});
