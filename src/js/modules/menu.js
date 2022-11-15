module.exports = function() {

  $('#btn__services').on('click', function (e){
    e.preventDefault();

    $('#main-wrap').toggleClass('no-scroll');
    $('#header').toggleClass('active');
    $('#header__services').toggleClass('active');
    $(this).toggleClass('active');
  });

  $('#btn__burger input').on('click', function (){
    $('#main-wrap').toggleClass('no-scroll');
    $('#header').toggleClass('active');
    $('#header__menu').toggleClass('active');
    $("#btn__burger").toggleClass('active');
  });

  $(document).keyup((e) => {
    if (e.keyCode === 27) {
     closeMenu();
    }
  });

  function closeMenu(){
    $('#main-wrap').removeClass('no-scroll');
    $('#header').removeClass('active');
    $('#header__menu').removeClass('active');
    $('#header__services').removeClass('active');

    $('#btn__services').removeClass('active');
    $('#btn__burger').removeClass('active');

    $('#btn__burger').find('input').prop('checked', false);
  }

};