'use strict';

const portfolio = require('./app-data').portfolio;
const scrollAnimate = require('./scroll');

$(document).ready( function() {
  // Render Portfolio cards
  let portfolioCards = require('./templates/portfolio-cards.handlebars');
  $('.portfolio-cards').append(portfolioCards({portfolio}));

  // Navbar Menu
  $(".menu-expand").on('click', function(e) {
    console.log("Menu Click");
    $(".menu").toggleClass("menuOpen");
    e.preventDefault();
  });

  // Page Scroll Animation
  scrollAnimate(jQuery);
  jQuery(function(){
    jQuery.mark.jump();
  });
});
