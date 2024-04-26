<?php
function mytheme_enqueue_custom_scripts()
{
   // Parameters: handle, src, dependencies, version, in_footer
   wp_enqueue_script(
      'custombutton', // Handle - a unique name for your script
      get_template_directory_uri() . '/build/blocks/index.js', // Source path to the script
      array('wp-element', 'wp-blocks', 'wp-editor'), // Dependencies, for example, WordPress blocks and element libraries
      '1.0.0', // Version number for cache busting
      true // Load in footer to improve page load performance
   );
}

add_action('wp_enqueue_scripts', 'mytheme_enqueue_custom_scripts');
