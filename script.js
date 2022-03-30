const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar__menu");
const logo = document.querySelector(".navbar__logo");
const menuLinks = document.querySelectorAll(".navbar__menu--item");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("navbar__menu--mobile");
});
menuLinks.forEach((link) =>
    link.addEventListener("click", () => {
        menu.classList.remove("navbar__menu--mobile");
        iconToggle();
    }),
);
logo.addEventListener("click", () => {
    menu.classList.remove("navbar__menu--mobile");
    if (menu.classList === open) {
        iconToggle();
    } else {
        hamburgerIcon.style.display = "block";
        crossIcon.style.display = "none";
    }
});

const hamburgerIcon = document.getElementById("hamburger");
const crossIcon = document.getElementById("cross");

crossIcon.style.display = "none";

const iconToggle = () => {
    if (hamburgerIcon.style.display === "none") {
        hamburgerIcon.style.display = "block";
        crossIcon.style.display = "none";
    } else {
        hamburgerIcon.style.display = "none";
        crossIcon.style.display = "block";
    }
};
