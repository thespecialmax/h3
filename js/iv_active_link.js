/**
 * @file
 * Bubble slide JS Behavior.
 */

(function (Drupal, drupalSettings, $, window, undefined) {
  'use strict';

  Drupal.behaviors.iv_active_link = {
    attach: function (context) {
      var selectors = []
        , hrefs
      ;

      if (
        (typeof drupalSettings) != 'object'
        || (typeof drupalSettings.iv_active_link) != 'object'
        || (typeof drupalSettings.iv_active_link.hrefs) != 'object'
      ) {
        return;
      }

      hrefs = drupalSettings.iv_active_link.hrefs;

      for(var i in hrefs) {
        selectors.push('a[href="' + hrefs[i] + '"]');
        selectors.push('a[href="' + hrefs[i] + '/"]');
        selectors.push('a[href^="' + hrefs[i] + '#"]');
        selectors.push('a[href^="' + hrefs[i] + '?"]');
        selectors.push('a[href^="' + hrefs[i] + '/#"]');
        selectors.push('a[href^="' + hrefs[i] + '/?"]');
      }

      var selector = selectors.join(', ');
      $(selector).not('.iv-active-link').addClass('iv-active-link');
    }
  };

})(Drupal, drupalSettings, jQuery, window, undefined);
