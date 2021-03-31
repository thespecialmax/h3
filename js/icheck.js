/**
 * @file
 * Varkert icheck js.
 */
/* global Drupal */
(function ($, window, document) {
  'use strict';
  Drupal.behaviors.icheck = {
    attach: function (context) {
      if ($.fn.iCheck) {
        var icheck_selectors = [
          'input[type="radio"]',
          'input[type="checkbox"]'
        ];

        $(icheck_selectors.join(', '))
        .filter(':not(.disable-icheck input)')
          .iCheck({
            checkboxClass: 'varkert-checkbox',
            radioClass: 'varkert-radio'
          })
          .on('ifClicked', function(){ $(this).trigger('click'); })
          .on('ifChanged', function(){ $(this).trigger('change'); })
        ;

        $('form').on('feedback-form-reset', function() {
          $(this).find(icheck_selectors.join(', ')).iCheck('update');
        })
      }
    }
  };
})(jQuery, window, document);
