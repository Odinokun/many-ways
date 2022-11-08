module.exports = function() {

  $('.how-it-page-top__tab-btn').on('click', function (e) {
    e.preventDefault();
    const activeVal = $(this).data('tab');

    $('.how-it-page-top__tab-btn').removeClass('active');
    $('.how-it-page-tab').fadeOut(0);

    $(this).addClass('active');
    $('#how-it-page-tab--' + activeVal).fadeIn();

  })

};