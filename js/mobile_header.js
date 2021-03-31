/**
 * @file
 * Varkert mobile header js.
 */
/* global Drupal */
(function ($, window, document) {
  'use strict';
  Drupal.behaviors.mobile_header = {
    attach: function (context) {

      if (!$('body').is('.mobile-header-processed')) {
        $('body').addClass('mobile-header-processed');

        // Init.

        // Handle active class.
        $('.navigation .menu li.active').each(function () {
          var $li = $(this)
            , $link = $li.find('> a:first-child')
            ;

          $link.addClass('active');

          if ($li.find('li.active').length) {
            $link.addClass('is-active-child');
          }
          else {
            $link.addClass('no-active-child');
          }
        });

        // Create pseudo items.
        $('.navigation .menu a.dropdown-toggle').each(function () {
          var $link = $(this)
            , $dropdown = $link.closest('.dropdown')
            , $child_menu = $dropdown.find('> .dropdown-menu')
            ;

          $child_menu.prepend('<li class="expanded dropdown pseudo-item"></li>');
          $child_menu.find('> .pseudo-item').append($link.clone().removeClass('dropdown-toggle'));

        });

        // Open / Close.
        $('body').on('click', '.navigation .menu a.dropdown-toggle', function(e) {
          if ($('body').is('.kiosk-logged-in')) {
            e.preventDefault();
          }

          if (!Drupal.behaviors.mobile_header.is_mobile()) {
            return;
          }

          e.preventDefault();

          var $link = $(this)
            , $dropdown = $link.closest('.dropdown')
            , $child_menu = $dropdown.find('> .dropdown-menu')
            ;

          // Close.
          if ($child_menu.is(':visible')) {
            $dropdown.addClass('animation');
            $child_menu.slideUp(400, function() {
              $dropdown.removeClass('open-mobile');
              $dropdown.removeClass('animation');
              $child_menu.attr('style', '');
            });
          }
          // Open.
          else {
            $dropdown.addClass('animation');
            $child_menu.slideDown(400, function() {
              $dropdown.addClass('open-mobile');
              $dropdown.removeClass('animation');
              $child_menu.attr('style', '');
            });
          }
        });
        var isMobile = {
          Android: function() {
            return navigator.userAgent.match(/Android/i);
          },
          BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
          },
          iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
          },
          Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
          },
          Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
          },
          any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
          }
        };
      }
    },
    is_mobile: function() {
      if ($('.js-detect-mobile').css('float') == 'none') {
        return true;
      }
      else {
        return false;
      }
    }
  };
})(jQuery, window, document);
