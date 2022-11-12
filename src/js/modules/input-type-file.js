module.exports = function () {

  $('input[type="file"]').on('change', function () {
    const wrap = $(this).parents('.request-form__file-input');
    const placeholder = $(wrap).find('.request-form__file-input-placeholder');
    const fileName = $(wrap).find('.request-form__file-input-filename');

    if (this.value) {
      let fileNameVal = $(this).val().split('/').pop().split('\\').pop();

      $(placeholder).fadeOut(0);
      $(fileName).text(fileNameVal).fadeIn();
    }
  })

};