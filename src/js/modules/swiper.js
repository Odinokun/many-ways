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

  const portfolioSliderThumb = new Swiper("#portfolio-slider-thumb", {
    // loop: true,
    // speed: 4000,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
    // centeredSlides: true,
    grabCursor: true,
    slidesPerView: 'auto',
    freeModeMomentum: false,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: true
    // },
  });

  const portfolioSlider = new Swiper("#portfolio-slider", {
    // loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    spaceBetween: 10,
    navigation: {
      nextEl: ".portfolio-slider__btn--next",
      prevEl: ".portfolio-slider__btn--prev",
    },
    thumbs: {
      swiper: portfolioSliderThumb,
    },
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: true
    // },
  });

};