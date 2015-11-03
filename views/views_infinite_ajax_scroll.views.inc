<?php
/**
 * @file
 *
 *  Provides the views plugin information.
 */

/**
 * Implements hook_views_plugins().
 */
function views_infinite_ajax_scroll_views_plugins() {
  return array(
    'module' => 'views_infinite_ajax_scroll',
    'pager' => array(
      'ias' => array(
        'title' => t('Infinite Ajax Scroll'),
        'help' => t('views_infinite_ajax_scroll'),
        'help topic' => '',
        'handler' => 'views_plugin_pager_infinite_ajax_scroll',
        'uses options' => TRUE,
        'parent' => 'full',
      ),
    ),
  );
}
