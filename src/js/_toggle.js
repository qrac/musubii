//----------------------------------------------------
// Toggle
//----------------------------------------------------

$(function(){
  if ($('.btn.is-demo-code').length) {
    $('.btn.is-demo-code').on('click', function(){
      $(this).toggleClass('is-active');
    });
  }
});