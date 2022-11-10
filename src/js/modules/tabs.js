module.exports = function() {

  $('.index-top__tabs-btn').on('click', function (e) {
    e.preventDefault();
    const activeVal = $(this).data('tab');

    $('.index-top__tabs-btn').removeClass('active');
    $(' .index-top__tabs-picture').fadeOut(0);

    $(this).addClass('active');
    $('.index-top__tabs-picture--' + activeVal).fadeIn();
  })

};