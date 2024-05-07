<?php
function files()
{
   wp_enqueue_script('main-js', get_theme_file_uri('/build/index.js'), '1.0', true);
   wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
   wp_enqueue_style('styles', get_theme_file_uri('/build/style-index.css'));
   wp_register_style('fonts', get_theme_file_uri('/build/assets/fonts.css'), [],  filemtime(get_theme_file_path('/build/assets/fonts.css')));
   wp_enqueue_style('fonts');
   // wp_register_style('core-styles', get_theme_file_uri('/build/styles/custom-core-blocks.css'), [],  filemtime(get_theme_file_path('/build/styles/custom-core-blocks.css')));
   // wp_enqueue_style('core-styles');
   wp_localize_script('main-js', 'siteData', array(
      'root_url' => get_site_url()
   ));
}

add_action('wp_enqueue_scripts', 'files');
