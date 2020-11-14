"use strict";

var SCROLL_DURATION = 400;
var SCROLL_OFFSET = 75;
var EPSILON = 1e-10;

var mainMenuNavLink = document.querySelectorAll(".main-menu_nav a[href*='#']");
var firstPageArrow = document.querySelector(".first-page_arrow");
var logo = document.querySelector(".fixed-header_logo");

function scrollToCoordinate(coordinate, duration) {
  var initialY = window.pageYOffset;
  var baseY = (initialY + coordinate) * 0.5;
  var difference = initialY - baseY;
  var startTime = performance.now();

  function step() {
    var normalizedTime = (performance.now() - startTime + EPSILON) / duration;

    if (normalizedTime > 1) {
      normalizedTime = 1;
    }

    window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));

    if (normalizedTime < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

var scrollToSelector = function scrollToSelector(selector, duration, offset) {
  var target = document.querySelector(selector);

  if (target) {
    var coord = target.getBoundingClientRect().top + window.pageYOffset - offset;
    scrollToCoordinate(coord, duration);
  }
};

var scrollToAnchor = function scrollToAnchor() {
  var duration = arguments.length <= 0 || arguments[0] === undefined ? SCROLL_DURATION : arguments[0];
  var offset = arguments.length <= 1 || arguments[1] === undefined ? SCROLL_OFFSET : arguments[1];
  return function (event) {
    var target = event.target.getAttribute('href');
    event.preventDefault();
    scrollToSelector(target, duration, offset);
  };
};

mainMenuNavLink.forEach(function (link) {
  link.addEventListener('click', scrollToAnchor(event));
});

firstPageArrow.addEventListener('click', scrollToAnchor(event));

logo.addEventListener('click', function (e) {
  e.preventDefault();
  scrollToCoordinate(0, SCROLL_DURATION);
});