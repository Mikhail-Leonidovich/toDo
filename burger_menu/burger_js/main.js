const burgerMenu = document.querySelector(".burger-menu");
const btnBurgerMenu = document.querySelector(".burger-menu__button");
const burgerNav = document.querySelector(".burger-menu__nav");
const overlay = document.querySelector(".burger-menu__overlay");


const burgerChangeVision = () => {
  burgerMenu.classList.toggle("burger-menu__active");
};

btnBurgerMenu.addEventListener("click", () => burgerChangeVision());

overlay.addEventListener("click", () => burgerChangeVision());

