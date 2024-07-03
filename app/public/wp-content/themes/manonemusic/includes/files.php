<?php
function files()
{
   // wp_enqueue_script('main-js', get_theme_file_uri('/build/index.js'), '1.0', true); // is being loaded on gsap-enqueue.php
   // wp_localize_script('main-js', 'siteData', array(
   //    'root_url' => get_site_url()
   // ));
   wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
   wp_register_style('fonts', get_theme_file_uri('/build/assets/fonts.css'), [], null);
   wp_enqueue_style('fonts');
   wp_enqueue_style('styles', get_theme_file_uri('/build/style-index.css'), [], null);

   wp_enqueue_script('homepage-js', get_theme_file_uri('/build/homepage.js'), ['jquery'], '1.0', true);
   // Localize script if needed

   // wp_localize_script('homepage-js', 'siteData', array(
   //    'root_url' => get_site_url()
   // ));

   if (is_front_page()) {
      wp_enqueue_script('homepage-js', get_theme_file_uri('/build/homepage.js'), ['jquery'], '1.0', true);

      // Localize script if needed
      wp_localize_script('homepage-js', 'siteData', array(
         'root_url' => get_site_url()
      ));
   }
}

add_action('wp_enqueue_scripts', 'files', 1);
