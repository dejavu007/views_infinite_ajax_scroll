/**
 * @file views_infinite_ajax_scroll.js
 *
 * Handles the pager for the view_infinite_ajax_scroll plugin.
 */
(function ($) {
  Drupal.behaviors.views_ias = {
    attach: function (context, settings) {
	  var iasViewsId = Drupal.settings.viewsInfiniteAjaxScroll.id;
	  var iasContainer = iasViewsId + ' ' + Drupal.settings.viewsInfiniteAjaxScroll.container;
	  var iasItem = Drupal.settings.viewsInfiniteAjaxScroll.item;
	  var iasPagination = iasViewsId + ' ' + Drupal.settings.viewsInfiniteAjaxScroll.pagination;
	  var iasNext = iasViewsId + ' ' + Drupal.settings.viewsInfiniteAjaxScroll.next;
	  var iasdelay = Drupal.settings.viewsInfiniteAjaxScroll.delay; // default 500
	  var iasNegMargin = Drupal.settings.viewsInfiniteAjaxScroll.negativeMargin; // default 300

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