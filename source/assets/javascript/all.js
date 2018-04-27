var Project = {};

Project.init = function(){

};

$(function(){
  Project.init();

  $('.accordion__header').on('click', function(){
    console.log('accordion');
    $(this).closest('.accordion').toggleClass('open');
  });

});

$(window).on("load", function(){

  if ( $('.footer').length > 0 ) {

    if ( $(window).width() < 768 ) {

      $('.footer__title').on('click', function(ev) {
        if ( $(this).is('.open') ) {
          $(this).removeClass('open');
          $(this).parent().find('.footer__nav').slideUp(700);
        } else {
          $(this).addClass('open');
          $(this).parent().find('.footer__nav').slideDown(700);
        }

      });
    }
  }

  if ( $('.header').length > 0 ) {
    $('.btn-menu-mobile').on('click', function(ev){
      $('.header__content__nav').toggleClass('open');
    });
  }
});

$(window).on("resize", function(){
  if ( $(window).width() < 768 ) {
    if ( $('.footer').length > 0 ) {
      $('.footer__title').unbind('click');
      $('.footer__title').on('click', function(ev) {
        if ( $(this).is('.open') ) {
          $(this).removeClass('open');
          $(this).parent().find('.footer__nav').slideUp(700);
        } else {
          $(this).addClass('open');
          $(this).parent().find('.footer__nav').slideDown(700);
        }

      });
    }
  }
  else {
    if ( $('.footer').length > 0 ) {
      $('.footer__title').unbind('click');
      $('.footer__nav').removeAttr('style');
      $('.footer__title').removeClass('open');
    }
  }
});

$(window).on("scroll", function(){
  var scrollY = $(this).scrollTop();

  var header = $('.header');
  var headerOffset = 0;
  if (scrollY > headerOffset && !header.hasClass('header--sticky')){
    header.addClass('header--sticky');
  }
  else if(scrollY <= headerOffset && header.hasClass('header--sticky')) {
    header.removeClass('header--sticky');
  }
});
