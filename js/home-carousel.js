/**
 * @file
 * Carousel JS Behavior.
 */

(function (Drupal, drupalSettings, $, window) {
  'use strict';

  Drupal.behaviors.varkert_home_carousel = {
    attach: function (context) {
      $('.view-id-varkert_front_page_carousel .ul-ns').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: false,
        adaptiveHeight: true,
        asNavFor: '.view-id-varkert_front_page_carousel_image .ul-ns'
      });
      $('.view-id-varkert_front_page_carousel_image .ul-ns').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.view-id-varkert_front_page_carousel .ul-ns',
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000
      });

    }
  };

})(Drupal, drupalSettings, jQuery, window);
