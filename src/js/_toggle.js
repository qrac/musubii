//----------------------------------------------------
// Toggle
//----------------------------------------------------

$(function(){
  $('.js-demo-code-toggle').children().on('click', function(){
    $(this).parent().toggleClass('is-active');
  });
});