'use strict';

//----------------------------------------------------
// Highlight
//----------------------------------------------------

hljs.initHighlightingOnLoad();
//----------------------------------------------------
// Smooth scroll
//----------------------------------------------------

$(function () {
  $('a[href^="#"]').on('click', function () {
    var speed = 400;
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});
//----------------------------------------------------
// Tab
//----------------------------------------------------

$(function () {
  $('.js-tab').on('click', function () {
    if ($(this).not('is-active')) {
      $(this).addClass('is-active').siblings('.js-tab').removeClass('is-active');
      var index = $('.js-tab').index(this);
      $('.js-tab-content').eq(index).addClass('is-active').siblings('.js-tab-content').removeClass('is-active');
    }
    if ($('.js-tab.is-home').not('is-active')) {
      $('.section.is-topcover-content').removeClass('is-active');
    }
    if ($('.js-tab.is-home').hasClass('is-active')) {
      $('.section.is-topcover-content').addClass('is-active');
    }
  });
});
//----------------------------------------------------
// Toggle
//----------------------------------------------------

$(function () {
  if ($('.btn.is-demo-code').length) {
    $('.btn.is-demo-code').on('click', function () {
      $(this).toggleClass('is-active');
    });
  }
});

$(function () {
  if ($('.group.is-documentation-nav').length) {
    $('.group.is-documentation-nav .text.is-link-reverse').on('click', function () {
      if ($(this).not('is-active')) {
        $('.group.is-documentation-nav .text.is-link-reverse').removeClass('is-active');
        $(this).addClass('is-active');
        var index = $('.group.is-documentation-nav .text.is-link-reverse').index(this);
        $('.groups.is-documentation-contents .content').eq(index).addClass('is-active').siblings('.content').removeClass('is-active');
      }
    });
  }
});