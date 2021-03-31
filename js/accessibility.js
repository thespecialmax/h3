/**
 * @file
 * JS Behavior for accessibility.
 */
/* global Drupal */
(function ($, window, document) {
  'use strict';
  Drupal.behaviors.accessibility = {
    attach: function (context, settings) {
      var processedClass = 'accessibility-processed';
      if ($('body').hasClass(processedClass)) {
        return;
      }
      $('body').addClass(processedClass);

      $('.accessible').on('click', function () {
        jQuery.cookie('accessibility', 'yes', {expires: 7});

        $('body').toggleClass('accessibility');
        if ($('body').hasClass('accessibility')) {
          jQuery.cookie('accessibility', 'yes', {expires: 7});
        }
        else {
          jQuery.cookie('accessibility', 'no', {expires: 7});
        }
      });

      if (jQuery.cookie('accessibility') === 'yes') {
        $('body').addClass('accessibility');
      }
    }
  };

})(window.jQuery, window, document);
