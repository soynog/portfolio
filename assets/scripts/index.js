'use strict';

const portfolio = require('./app-data').portfolio;
const scrollAnimate = require('./scroll');

$(document).ready( function() {
  // Render Portfolio cards
  let portfolioCards = require('./templates/portfolio-cards.handlebars');
  $('.portfolio-cards').append(portfolioCards({portfolio}));
  // Render custom background images

  // Navbar Menu
  $(".menu-expand").on('click', function(e) {
    $('.navbar-wrapper').toggleClass('menu-open');
    $(".menu").toggleClass("menu-open");
    e.preventDefault();
    e.stopPropagation(); // Make sure hide menu click doesn't fire
  });

  // Hide Menu on external click
  $("body").on('click', function() {
    $('.navbar-wrapper').removeClass('menu-open');
    $(".menu").removeClass("menu-open");
  });

  // Page Scroll Animation
  scrollAnimate(jQuery);
  jQuery(function(){
    jQuery.mark.jump();
  });
});
