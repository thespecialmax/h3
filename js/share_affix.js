/**
 * @file
 * Share affix JS Behavior.
 */
(function (Drupal, drupalSettings, $, window) {
  'use strict';

  Drupal.behaviors.share_affix = {
    attach: function (context, settings) {
      var reset_affix_offset = function () {
        var offset = $('.content-body').offset();
        var $social_block = $('.socials--node-full');

        $(window).off('.affix');
        $social_block.removeData('bs.affix').removeClass('affix affix-top affix-bottom');
        $social_block.affix({offset: offset.top - 200});
      };

      reset_affix_offset();

      $(window).on('resize', function () {
        reset_affix_offset();
      });
    }
  };

})(Drupal, drupalSettings, jQuery, window);
