<?php

/**
 * Plugin Name:       Manonemusic
 * Description:       A plugin to register gutenberg blocks for Manonemusic.
 * Requires at least: 6.1
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            Juli Scapucin
 * Author URI:        https://juliscapucin.com
 * Text Domain:       manonemusic
 *
 * @package CreateBlock
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function create_block_manonemusic_block_init()
{
	$build_path = __DIR__ . '/build';
	$directories = new DirectoryIterator($build_path);

	foreach ($directories as $folder) {
		if ($folder->isDir() && !$folder->isDot()) {
			$block_path = $build_path . '/' . $folder->getFilename();

			register_block_type($block_path);
		}
	}
}

add_action('init', 'create_block_manonemusic_block_init');

function utm_user_scripts()
{
	$plugin_url = plugin_dir_url(__FILE__);

	wp_enqueue_style('style',  $plugin_url . "style.css");
}

add_action('admin_print_styles', 'utm_user_scripts');



// Custom Post Types
function register_custom_post_type($type, $args)
{
	$default_args = array(
		'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
		'has_archive' => true,
		'public' => true,
		'show_in_rest' => true,
		'query_var' => true,
		'capability_type' => 'post',
		'taxonomies' => array('category', 'post_tag'),
		'labels' => array(
			'name' => ucfirst($type) . 's',
			'add_new_item' => 'Add New ' . ucfirst($type),
			'edit_item' => 'Edit ' . ucfirst($type),
			'all_items' => 'All ' . ucfirst($type) . 's',
			'singular_name' => ucfirst($type)
		),
		'menu_icon' => 'dashicons-admin-post'
	);

	$args = array_merge($default_args, $args);
	register_post_type($type, $args);
}

function postTypes()
{
	register_custom_post_type('release', array(
		'rewrite' => array('slug' => 'releases'),
		'menu_icon' => 'dashicons-album'
	));

	register_custom_post_type('project', array(
		'rewrite' => array('slug' => 'projects'),
		'menu_icon' => 'dashicons-portfolio',
		'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments')
	));
}

add_action('init', 'postTypes');

// Activate Plugin
function manonemusic_activate()
{
	if (version_compare(get_bloginfo('version'), '5.9', '<')) {
		wp_die('You must update WordPress to use this plugin');
	}
	flush_rewrite_rules(); // Refresh permalinks
}

register_activation_hook(__FILE__, 'manonemusic_activate');
