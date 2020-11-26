var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true
});

var sliderContainer = document.getElementById('swiper-container');

function sliderHeight() {
    var width = window.innerWidth;
    sliderContainer.style.height = ((width / 16) * 9) + 'px';
}

(function() {
    sliderHeight();
    window.addEventListener('resize', sliderHeight);
})();