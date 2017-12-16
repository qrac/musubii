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

$(function(){
  if ($('.group.is-documentation-nav').length) {
    $('.group.is-documentation-nav .text.is-link-reverse').on('click', function(){
      if ($(this).not('is-active')) {
        $('.group.is-documentation-nav .text.is-link-reverse').removeClass('is-active');
        $(this).addClass('is-active');
        const index = $('.group.is-documentation-nav .text.is-link-reverse').index(this);
        $('.groups.is-documentation-contents .content').eq(index).addClass('is-active').siblings('.content').removeClass('is-active');
      }
    });
  }
});