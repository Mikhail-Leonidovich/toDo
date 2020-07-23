let burgerMenu = document.querySelector(".burger-menu");
let btnBurgerMenu = document.querySelector(".burger-menu__button");
let burgerNav = document.querySelector(".burger-menu__nav");

function burgerChangeVision() {
  burgerMenu.classList.toggle("burger-menu__active");
}

btnBurgerMenu.addEventListener("click", () => {
  burgerChangeVision();
});
