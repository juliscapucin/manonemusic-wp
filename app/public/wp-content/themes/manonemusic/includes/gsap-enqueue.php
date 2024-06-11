<?php
// The proper way to enqueue GSAP script in WordPress
// wp_enqueue_script( $handle, $src, $deps, $ver, $in_footer );
// https://www.youtube.com/watch?v=wlrHmiWm4vQ&t=1321s
// https://gsap.com/resources/Wordpress/


function theme_gsap_script()
{

   // The core GSAP library
   wp_enqueue_script('gsap-js', get_template_directory_uri() . '/build/js/gsap.min.js', array(), false, true);
   wp_enqueue_script('scrolltrigger', get_template_directory_uri() . '/build/js/ScrollTrigger.min.js', array('gsap-js'), false, true);
   wp_enqueue_script('scrollto', get_template_directory_uri() . '/build/js/ScrollToPlugin.min.js', array('gsap-js'), false, true);
   // Your animation code file - with gsap.js passed as a dependency
   wp_enqueue_script('gsap-js2', get_template_directory_uri() . '/build/index.js', array('gsap-js'), false, true);
}

add_action('wp_enqueue_scripts', 'theme_gsap_script');
