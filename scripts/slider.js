const swiper = new Swiper('.js-main-slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        768: {
            spaceBetween: 20,
        },
    }
});
