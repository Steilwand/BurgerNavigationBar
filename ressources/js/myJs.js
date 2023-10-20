// JavaScript to toggle the menu-open class
const menuButton = document.querySelector(".menu-button");
const mobile_menu = document.querySelector(".mobile-nav");

menuButton.addEventListener("click", function () {
    menuButton.classList.toggle("menu-open");
    mobile_menu.classList.toggle("menu-open");
});
