module.exports = function() {

  $('#btn__services').on('click', function (e){
    e.preventDefault();

    $('#header').toggleClass('active');
    $('#header__services').toggleClass('active');
    $(this).toggleClass('active');
  });

  $('#btn__burger').on('click', function (e){
    e.preventDefault();

    $('#header').toggleClass('active');
    $('#header__menu').toggleClass('active');
    $(this).toggleClass('active');
  });

  $(document).keyup((e) => {
    if (e.keyCode === 27) {
     closeMenu();
    }
  });

  function closeMenu(){
    $('#header').removeClass('active');
    $('#header__menu').removeClass('active');
    $('#header__services').removeClass('active');

    $('#btn__services').removeClass('active');
    $('#btn__burger').removeClass('active');

    $('#btn__burger').find('input').prop('checked', false);
  }

};