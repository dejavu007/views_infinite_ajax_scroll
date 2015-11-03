/**
 * @file views_infinite_ajax_scroll.js
 *
 * Handles the pager for the view_infinite_ajax_scroll plugin.
 */
(function ($) {
  Drupal.behaviors.views_ias = {
    attach: function (context, settings) {
	  var iasViewsId = Drupal.settings.viewIas.id;
	  var iasContainer = iasViewsId + Drupal.settings.viewIas.container;
	  var iasItem = iasViewsId + Drupal.settings.viewIas.item;
	  var iasPagination = iasViewsId + Drupal.settings.viewIas.pagination;
	  var iasNext = iasViewsId + Drupal.settings.viewIas.next;
	  var iasdelay = Drupal.settings.viewIas.delay; // default 500
	  var iasNegMargin = Drupal.settings.viewIas.negativeMargin; // default 300

      var ias = $.ias({
        container:      iasContainer,
        item:           '.views-row',
        pagination:     iasPagination,
        next:           iasNext,
        delay:          iasdelay,
        negativeMargin: iasNegMargin
      });
      ias.extension(new IASSpinnerExtension());
    }
  };
})(jQuery);