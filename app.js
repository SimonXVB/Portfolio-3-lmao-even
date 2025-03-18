const menuOpen = document.querySelector(".menuButtonOpen");
const menuClose = document.querySelector(".menuButtonClose");
const menu = document.querySelector(".menu");
const menuButton = document.querySelectorAll(".menu a");
const navbar = document.querySelector(".navbar");
const cardBorder = document.querySelectorAll(".card-border");
const card = document.querySelectorAll(".card");

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

for(let i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseenter", () => {
        cardBorder[i].style.transition = "opacity 1s, scale 0.5s";
        card[i].style.transition = "opacity 1s, scale 0.5s";
        cardBorder[i].style.opacity = "100";
        cardBorder[i].style.scale = "1.1";
        card[i].style.scale = "1.1";
    });

    card[i].addEventListener("mouseleave", () => {
        cardBorder[i].style.transition = "opacity 1s, scale 0.5s";
        card[i].style.transition = "opacity 1s, scale 0.5s";
        cardBorder[i].style.opacity = "0";
        cardBorder[i].style.scale = "1.0";
        card[i].style.scale = "1.0";
    });
};