'use strict';

const scrollAnimate = function (jQuery) {
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
        let jumpobj = jQuery(this);
        let target = jumpobj.attr('href');
        let thespeed = 600;
        let windowWidth = $(window).width();
        let menuWidth = windowWidth > 780 ? $('.nav-menu').height() : 0;
        let offset = jQuery(target).offset().top - menuWidth;
        jQuery('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing');
        e.preventDefault();
      });
    }
  };
};

module.exports = scrollAnimate;
