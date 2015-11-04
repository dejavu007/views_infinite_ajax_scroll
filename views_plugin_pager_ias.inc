<?php
/**
 * @file
 *
 * The plugin to handle Infinite Ajax Scroll pager.
 *
 * @ingroup views_pager_plugins
 */

class views_plugin_pager_ias extends views_plugin_pager_mini {

  /**
   * Options definition overwrite.
   */
  function option_definition() {
    $options = parent::option_definition();
    $options['classes'] = array(
      'contains' => array(
        'container' => array('default' => '.view-content'),
        'item' => array('default' => '.views-row'),
        'pagination' => array('default' => 'ul.pager'),
        'next' => array('default' => 'li.pager-next a'),
      ),
    );
    $options['delay'] = array(
      'default' => 500,
    );
    $options['negmargin'] = array(
      'default' => 300,
    );
    return $options;
  }

  /**
   * Options form overwrite.
   */
  function options_form(&$form, &$form_state) {
    parent::options_form($form, $form_state);

    $form['classes'] = array(
	  '#type' => 'fieldset',
	  '#collapsible' => FALSE,
	  '#collapsed' => FALSE,
	  '#tree' => TRUE,
	  '#title' =>  t('Selector Classes'),
	  '#input' => TRUE,
	  '#description' => t('Selector classes.'),
    );
    $form['classes']['container'] = array(
	  '#type' => 'textfield',
	  '#title' => t('Container Class'),
	  '#description' => t('Selector class for the container.'),
	  '#default_value' => $this->options['classes']['container'],
    );
	$form['classes']['item'] = array(
	  '#type' => 'textfield',
	  '#title' => t('Item Class'),
	  '#description' => t('Selector class for the item.'),
	  '#default_value' => $this->options['classes']['item'],
    );
	$form['classes']['pagination'] = array(
	  '#type' => 'textfield',
	  '#title' => t('Pagination'),
	  '#description' => t('Selector class for the pagination.'),
	  '#default_value' => $this->options['classes']['pagination'],
    );
	$form['classes']['next'] = array(
	  '#type' => 'textfield',
	  '#title' => t('Next link'),
	  '#description' => t('Selector class for the next link.'),
	  '#default_value' => $this->options['classes']['next'],
    );

	$form['delay'] = array(
      '#type' => 'textfield',
      '#title' => t('Delay'),
      '#description' => t('Delay in appending new content.'),
      '#default_value' => $this->options['delay'],
    );
	$form['negmargin'] = array(
      '#type' => 'textfield',
      '#title' => t('Negative Margin'),
      '#description' => t('Negative margin in pixels.'),
      '#default_value' => $this->options['negmargin'],
    );
  }

}