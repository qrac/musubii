//----------------------------------------------------
// Documentation Nav
//----------------------------------------------------

$(function(){
  $('.js-doc-navs .js-doc-nav').on('click', function(){
    if ($(this).not('is-active')) {
      $('.js-doc-navs .js-doc-nav').removeClass('is-active');
      $(this).addClass('is-active');
      const index = $('.js-doc-navs .js-doc-nav').index(this);
      $('.js-doc-contents .js-doc-content').eq(index).addClass('is-active').siblings('.js-doc-content').removeClass('is-active');
    }
  });
});