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

};