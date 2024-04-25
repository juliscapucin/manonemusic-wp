<?php
function registerBlock()
{
   // Register the block script
   wp_register_script(
      'homeBlockScript',
      get_stylesheet_directory_uri() . '/build/home.js',
      array('wp-blocks', 'wp-editor')
   );

   // Register the block type
   register_block_type('manonemusic/home', array(
      'editor_script' => 'homeBlockScript',
   ));
}
add_action('init', 'registerBlock');
