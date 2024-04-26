<?php

/**
 * Plugin Name:       Manonemusic
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
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
function create_block_manonemusic_block_init_ori()
{
	register_block_type(__DIR__ . '/build');
}


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
