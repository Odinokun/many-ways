module.exports = function() {

  $(function() {
    $('.scroll-down[href*=\\#]').on("click", function(e){
       e.preventDefault();

       let anchor = $(this);
       $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 0 + 'px'
       }, 1000);
    });
    return false;
  });

};