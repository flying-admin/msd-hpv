var Project = {};

Project.init = function(){
  
};

$(document).on("ready", function(){
  Project.init();
});

$(window).on("load", function(){

  if ( $('.footer').length > 0 ) {

    if ( $(window).width() < 768 ) {

      $('.footer__title').on('click', function(ev) {
        if ( $(this).is('.open') ) {
          $(this).removeClass('open');
          $(this).parent().find('.footer__nav').slideUp();
        } else {
          $(this).addClass('open');
          $(this).parent().find('.footer__nav').slideDown();
        }

      });
    }
  }
});

$(window).on("resize", function(){
  if ( $(window).width() < 768 ) {
    if ( $('.footer').length > 0 ) {

      if ( $(window).width() < 768 ) {

        $('.footer__title').on('click', function(ev) {
          if ( $(this).is('.open') ) {
            $(this).removeClass('open');
            $(this).parent().find('.footer__nav').slideUp();
          } else {
            $(this).addClass('open');
            $(this).parent().find('.footer__nav').slideDown();
          }

        });
      }
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
