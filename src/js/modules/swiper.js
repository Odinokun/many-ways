module.exports = function () {

  const secondSlider = new Swiper('#index-slider', {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    loop: true,
    autoplay: {
      delay: 4000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  const testimonialsSlider = new Swiper('#testimonials-slider', {
    navigation: {
      nextEl: '.testimonials-slider__btn--next',
      prevEl: '.testimonials-slider__btn--prev',
    },
    spaceBetween: 0,
    slidesPerView: 1,
    breakpoints: {
      1025: {
        spaceBetween: 40,
        slidesPerView: 2,
      }
    },
    loop: true,
    autoplay: {
      delay: 4000,
    },
  });

};