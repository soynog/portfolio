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
        var jumpobj = jQuery(this);
        console.log(jumpobj);
        var target = jumpobj.attr('href');
        console.log(target);
        var thespeed = 600;
        console.log($(target));
        let menuWidth = $('li.scroll-on-page-link').height();
        console.log(menuWidth);
        var offset = jQuery(target).offset().top - menuWidth * 2;
        jQuery('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing');
        e.preventDefault();
      });
    }
  };
};

module.exports = scrollAnimate;
