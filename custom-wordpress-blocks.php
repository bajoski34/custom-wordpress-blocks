<?php
/**
 * Plugin Name:       Custom WordPress Plugin
 * Description:       Sample for WordPress.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            Abraham Olaobaju
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cwp
 *
 * @package CreateBlock
 */


/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function multiblock_register_blocks() {
	$custom_blocks = array (
		'custom-button',
	);

	//TODO: Handle when plugin is installed as a repo. auto set the environment to development.
	foreach ( $custom_blocks as $block ) {
		register_block_type( __DIR__ . '/build/blocks/' . $block );
	}
}
add_action( 'init', 'multiblock_register_blocks' );
