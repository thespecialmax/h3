/**
 * @file
 * Privacy Policy JS Behavior.
 */

/* global Drupal */
(function ($, window, document) {
  'use strict';
  Drupal.behaviors.varkert_theme_privacy_policy = {
    attach: function (context) {
      var $body = $('body');
      var class_processed = 'varkert-theme-privacy-policy-processed';
      var class_readed = 'varkert-theme-privacy-policy-readed';
      var class_disabled = 'varkert-theme-privacy-policy-disabled';

      var selector_text = '.privacy-policy-body';
      var selector_checkbox = '.field--name-field-privacy-policy, .js-form-item-accept .varkert-checkbox, .js-form-item-accept input';
      var selector_checkbox_parent = '.form-item';
      var selector_submit = '.js-form-submit';

      var handle_scroll = function($text, e) {
        if ($text.hasClass(class_readed)) {
          return;
        }

        // Not readed yet.
        if ( ($text.scrollTop() + $text.innerHeight() + 30) < $text[0].scrollHeight) {
          return;
        }

        // Readed.
        $text.addClass(class_readed);

        var $form = $text.closest('form');

        var $field = $form.find(selector_checkbox);
        var $field_parent = $field.closest(selector_checkbox_parent);
        var $submit = $form.find(selector_submit);

        $field.removeAttr('disabled');
        $submit.removeAttr('disabled');

        $field_parent.removeClass(class_disabled);

        // Unfortunately in some cases iCheck's disabled class has to be removed.
        $field.removeClass('disabled');
      };

      // Init.
      $(selector_text).not(class_processed).each(function() {
        var $text = $(this);
        $text.addClass(class_processed);

        var $form = $text.closest('form');

        var $field = $form.find(selector_checkbox);
        var $field_parent = $field.closest(selector_checkbox_parent);
        var $submit = $form.find(selector_submit);

        $field.attr('disabled', 'disabled');
        $submit.attr('disabled', 'disabled');

        $field_parent.addClass(class_disabled);

        $text.scroll(function(e) {
          handle_scroll($(this), e);
        });
      });
    }
  };
})(jQuery, window, document);
