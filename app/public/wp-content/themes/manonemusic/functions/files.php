<?php
function files()
{
   wp_enqueue_script('main-js', get_theme_file_uri('/build/index.js'), array('jquery'), '1.0', true);
   wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
   wp_enqueue_style('styles', get_theme_file_uri('/build/style-index.css'));

   wp_localize_script('main-js', 'siteData', array(
      'root_url' => get_site_url()
   ));
}

add_action('wp_enqueue_scripts', 'files');
