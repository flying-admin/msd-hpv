var Project={};Project.init=function(){},$(function(){Project.init(),$(".accordion__header").on("click",function(){$(this).closest(".accordion").toggleClass("open")})}),$(window).on("load",function(){$(".footer").length>0&&$(window).width()<768&&$(".footer__title").on("click",function(){$(this).is(".open")?($(this).removeClass("open"),$(this).parent().find(".footer__nav").slideUp(700)):($(this).addClass("open"),$(this).parent().find(".footer__nav").slideDown(700))}),$(".header").length>0&&$(".btn-menu-mobile").on("click",function(){$(".header__content__nav").toggleClass("open")})}),$(window).on("resize",function(){$(window).width()<768?$(".footer").length>0&&($(".footer__title").unbind("click"),$(".footer__title").on("click",function(){$(this).is(".open")?($(this).removeClass("open"),$(this).parent().find(".footer__nav").slideUp(700)):($(this).addClass("open"),$(this).parent().find(".footer__nav").slideDown(700))})):$(".footer").length>0&&($(".footer__title").unbind("click"),$(".footer__nav").removeAttr("style"),$(".footer__title").removeClass("open"))}),$(window).on("scroll",function(){var t=$(this).scrollTop(),o=$(".header"),e=0;t>e&&!o.hasClass("header--sticky")?o.addClass("header--sticky"):t<=e&&o.hasClass("header--sticky")&&o.removeClass("header--sticky"),$(".intro").length>0&&(introHeight=$(".intro").height()-$(window).width()/10,t>introHeight&&!o.is(".after-intro")&&o.addClass("after-intro"),t<=introHeight&&o.is(".after-intro")&&o.removeClass("after-intro"))});
