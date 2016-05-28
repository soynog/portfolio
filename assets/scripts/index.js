'use strict';

const portfolio = require('./app-data').portfolio;
const scrollAnimate = require('./scroll');

$(document).ready( function() {
  // Render Portfolio cards
  let portfolioCards = require('./templates/portfolio-cards.handlebars');
  $('.portfolio-cards').append(portfolioCards({portfolio}));

  // Navbar Menu
  $(".menu-expand").on('click', function(e) {
    $(".menu").toggleClass("menuOpen");
    e.preventDefault();
    e.stopPropagation(); // Make sure hide menu click doesn't fire
  });

  // Hide Menu on external click
  $("body").on('click', function() {
    $(".menu").removeClass("menuOpen");
  });

  // Page Scroll Animation
  scrollAnimate(jQuery);
  jQuery(function(){
    jQuery.mark.jump();
  });
});
