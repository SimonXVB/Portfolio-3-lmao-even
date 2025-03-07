const menuOpen = document.querySelector(".menuButtonOpen");
const menuClose = document.querySelector(".menuButtonClose");
const menu = document.querySelector(".menu");
const menuButton = document.querySelectorAll(".menu a");
const navbar = document.querySelector(".navbar");

menuOpen.addEventListener("click", () => {
    menuOpen.style.display = "none";
    menu.style.display = "flex";
});

menuClose.addEventListener("click", () => {
    menuOpen.style.display = "block";
    menu.style.display = "none";
});

menuButton.forEach((button) => {
    button.addEventListener("click", () => {
        menuOpen.style.display = "block";
        menu.style.display = "none";
    });
});