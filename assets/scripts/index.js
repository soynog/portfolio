'use strict';

const portfolio = require('./app-data').portfolio;

$(document).ready( function() {
  // Render Portfolio cards
  let portfolioCards = require('./templates/portfolio-cards.handlebars');
  $('.portfolio-cards').append(portfolioCards({portfolio}));

  // Page Scroll Animation
  (function (jQuery) {
    jQuery.mark = {
      jump: function (options) {
        var defaults = {
          selector: 'li.scroll-on-page-link'
        };
        if (typeof options === 'string') {
          defaults.selector = options;
        }

        options = jQuery.extend(defaults, options);
        return jQuery(options.selector).click(function (e) {
          var jumpobj = jQuery(this);
          console.log(jumpobj);
          var target = jumpobj.attr('href');
          console.log(target);
          var thespeed = 600;
          console.log($(target));
          let menuWidth = $('li.scroll-on-page-link').height();
          console.log(menuWidth);
          var offset = jQuery(target).offset().top - menuWidth;
          jQuery('html,body').animate({
            scrollTop: offset
          }, thespeed, 'swing');
          e.preventDefault();
        });
      }
    };
  })(jQuery);

  // Navbar Menu
  $(".menu-expand").on('click', function(e) {
    console.log("Menu Click");
    $(".menu").toggleClass("menuOpen");
    e.preventDefault();
  });


  jQuery(function(){
    jQuery.mark.jump();
  });
});
