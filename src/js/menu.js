"use strict";

var menuBtn = document.querySelector('.menu-btn');
var menuBtnFixed = document.querySelector('.fixed-header_menu-btn');
var headerFixed = document.querySelector('.fixed-header');
var mainMenu = document.querySelector('.main-menu');
var mainMenuClose = document.querySelector('.main-menu_close');
var mainMenuNavLinks = document.querySelectorAll('.main-menu_nav a');
var mainMenuOverlay = document.querySelector('.menu-overlay');
var body = document.querySelector('body');

// Polyfill for IE
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

menuBtn.addEventListener("click", openMenu);
// menuBtnFixed.addEventListener("click", openMenu);

mainMenuClose.addEventListener("click", closeMenu);
mainMenuOverlay.addEventListener("click", closeMenu);

mainMenuNavLinks.forEach(function (item) {
    item.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'Escape') {
        if (mainMenu.classList.contains("active")) {
            closeMenu();
            // changeFocus();
        }
    }
});

function openMenu() {
    mainMenu.classList.toggle("active");
    mainMenuOverlay.classList.toggle("active");
    mainMenuClose.focus();
}

function closeMenu() {
    mainMenu.classList.remove("active");
    mainMenuOverlay.classList.remove("active");
}

// function changeFocus() {
//     if (headerFixed.style.display == "none") {
//         menuBtn.focus();
//     } else {
//         menuBtnFixed.focus();
//     }
// }