'use strict';

const portfolio = require('./app-data').portfolio;
const scrollAnimate = require('./scroll');

$(document).ready( function() {
  // Render Portfolio cards
  let portfolioCards = require('./templates/portfolio-cards.handlebars');
  $('#portfolio-header-box').after(portfolioCards({portfolio}));

  // Navbar Menu
  $(".nav-menu-icon").on('click', function(e) {
    // $('.navbar-wrapper').toggleClass('menu-open');
    console.log("Nav Menu Clicked");
    $(".nav-menu").toggleClass("menu-open");
    e.preventDefault();
    e.stopPropagation(); // Make sure hide menu click doesn't fire
  });

  // Hide Menu on external click
  $("body").on('click', function() {
    $(".nav-menu").removeClass("menu-open");
  });

  // Page Scroll Animation
  scrollAnimate(jQuery);
  jQuery(function(){
    jQuery.mark.jump();
  });
});
