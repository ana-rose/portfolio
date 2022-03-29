const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar__menu");
const menuLinks = document.querySelectorAll(".navbar__menu--item");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("navbar__menu--mobile");
});
menuLinks.forEach((link) =>
    link.addEventListener("click", () => {
        menu.classList.remove("navbar__menu--mobile");
    }),
);
