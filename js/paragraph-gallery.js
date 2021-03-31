/**
 * @file
 * Share affix JS Behavior.
 */
(function (Drupal, drupalSettings, $, window) {
  'use strict';

  Drupal.behaviors.paragrah_gallery = {
    attach: function (context, settings) {
      var $slick_slider = $('.media--type-gallery');
      $slick_slider.each(function () {
        $(this).find('.slick-dots').prepend('<span class="slick__max">' + $(this).find('.slick-dots li:last-child button').text() + ' / </span>');
      });
    }
  };

})(Drupal, drupalSettings, jQuery, window);
