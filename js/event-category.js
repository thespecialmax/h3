/**
 * @file
 * Carousel JS Behavior.
 */

(function (Drupal, drupalSettings, $, window) {
  'use strict';

  Drupal.behaviors.varkert_category_carousel = {
    loaded: false,

    attach: function (context) {
      if (this.loaded) {
        return;
      }
      this.loaded = true;

      if (!$('.view-event-category-slider .item-list ul').length) {
        return;
      }

      var tns = window.tns || function () {};

      tns({
        container: '.view-event-category-slider .item-list ul',
        autoWidth: true,
        loop: false,
        mouseDrag: true,
        swipeAngle: false,
        nav: false,
        speed: 400
      });
    }
  };

})(Drupal, drupalSettings, jQuery, window);
