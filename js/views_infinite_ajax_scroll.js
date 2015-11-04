/**
 * @file views_infinite_ajax_scroll.js
 *
 * Handles the pager for the view_infinite_ajax_scroll plugin.
 */
(function ($) {
  Drupal.behaviors.views_ias = {
    attach: function (context, settings) {
	  var iasViewsId = Drupal.settings.view_infinite_ajax_scroll.id;
	  var iasContainer = iasViewsId + ' ' + Drupal.settings.view_infinite_ajax_scroll.container;
	  var iasItem = iasViewsId + ' ' + Drupal.settings.view_infinite_ajax_scroll.item;
	  var iasPagination = iasViewsId + ' ' + Drupal.settings.view_infinite_ajax_scroll.pagination;
	  var iasNext = iasViewsId + ' ' + Drupal.settings.view_infinite_ajax_scroll.next;
	  var iasdelay = Drupal.settings.view_infinite_ajax_scroll.delay; // default 500
	  var iasNegMargin = Drupal.settings.view_infinite_ajax_scroll.negativeMargin; // default 300

      var ias = $.ias({
        container:      iasContainer,
        item:           iasItem,
        pagination:     iasPagination,
        next:           iasNext,
        delay:          iasdelay,
        negativeMargin: iasNegMargin
      });
      ias.extension(new IASSpinnerExtension());
    }
  };
})(jQuery);