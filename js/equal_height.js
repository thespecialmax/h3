/**
 * @file
 * JS Behavior for creating equel heights in some divs.
 */
/* global Drupal */
jQuery.fn.extend({
  varkertEqualHeights: function () {
    var maxHeight = 0;

    // Restore defaults.
    this.each(function(){
      jQuery(this).height('auto');
    });

    this.each(function(){
      if (jQuery(this).height() > maxHeight) {
        maxHeight = jQuery(this).height();
      }
    });
    this.height(maxHeight);
  }
});

(function($, window, document){
  'use strict';
  Drupal.behaviors.equal_heights  = {
    attach: function (context, settings) {
      Drupal.behaviors.equal_heights.varkert_equal_heights_event();
      $(window).on('resize', Drupal.behaviors.equal_heights.varkert_equal_heights_event);
    },

    varkert_equal_heights_event: function () {
      $('.block-views_block--varkert_promoted_events-promoted_events_hu .node--teaser .field-date').varkertEqualHeights();
      $('.block-views_block--varkert_promoted_events-promoted_events_en .node--teaser .field-date').varkertEqualHeights();

      $('.block-views_block--varkert_promoted_events-promoted_events_carousel_hu article').varkertEqualHeights();
      $('.block-views_block--varkert_promoted_events-promoted_events_carousel_en article').varkertEqualHeights();
    }
  };

})(window.jQuery, window, document);