const swiper = new Swiper('.js-main-slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    navigation: {
        nextEl: '.slider-navigation__button--main.swiper-button-next',
        prevEl: '.slider-navigation__button--main.swiper-button-prev'
    },
    breakpoints: {
        768: {
            spaceBetween: 20,
        },
    }
});

const swiper2 = new Swiper('.js-selection-slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    navigation: {
        nextEl: '.slider-navigation__button--selection.swiper-button-next',
        prevEl: '.slider-navigation__button--selection.swiper-button-prev'
    },
    breakpoints: {
        768: {
            spaceBetween: 20,
        },
    }
});
