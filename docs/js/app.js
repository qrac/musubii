'use strict';

//----------------------------------------------------
// Documentation Nav
//----------------------------------------------------

$(function () {
  $('.js-doc-navs .js-doc-nav').on('click', function () {
    if ($(this).not('is-active')) {
      $('.js-doc-navs .js-doc-nav').removeClass('is-active');
      $(this).addClass('is-active');
      var index = $('.js-doc-navs .js-doc-nav').index(this);
      $('.js-doc-contents .js-doc-content').eq(index).addClass('is-active').siblings('.js-doc-content').removeClass('is-active');
    }
  });
});
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