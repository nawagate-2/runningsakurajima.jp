"use strict";!function(){$("body").scrollspy({target:"#global-navigation",offset:110}),$("#header-info-links a").smoothScroll({offset:-100}),$("#global-navigation a").smoothScroll({offset:-100}),$("#faq-headings a").smoothScroll(),$("#return-pagetop a").smoothScroll(),$("#countdown-timer").countdown("2017/12/3 10:00:00").on("update.countdown",function(o){$(this).html(o.strftime('<div class="p-section--home__countdown__timer__frame"><div class="p-section--home__countdown__timer__frame__number">%-D</div><div class="p-section--home__countdown__timer__frame__label">Days</div></div><div class="p-section--home__countdown__timer__frame"><div class="p-section--home__countdown__timer__frame__number">%H</div><div class="p-section--home__countdown__timer__frame__label">Hours</div></div><div class="p-section--home__countdown__timer__frame"><div class="p-section--home__countdown__timer__frame__number">%M</div><div class="p-section--home__countdown__timer__frame__label">Minutes</div></div><div class="p-section--home__countdown__timer__frame"><div class="p-section--home__countdown__timer__frame__number">%S</div><div class="p-section--home__countdown__timer__frame__label">Seconds</div></div>'))}).on("finish.countdown",function(){$("#countdown-message").addClass("hidden"),$(this).addClass("hidden")}),$(".panel.panel-toggle .panel-heading").on("click",function(){$(this).next(".panel-body").slideToggle()}),$(window).width()<768&&$(".panel.panel-toggle .panel-heading").trigger("click");var o=$(document),e=$(".l-header .navbar"),n=$("#points").offset();$(window).on("scroll",function(){o.scrollTop()>n.top?e.addClass("is-paint"):e.removeClass("is-paint")}),$(window).scroll(function(){$(window).scrollTop()>100?$("#return-pagetop").fadeIn("slow"):$("#return-pagetop").fadeOut("slow")})}();