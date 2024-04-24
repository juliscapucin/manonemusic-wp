<?php
function features()
{
   add_theme_support('title-tag');
   add_theme_support('post-thumbnails');
   register_nav_menu('headerMenu', 'Header Menu');
   register_nav_menu('footerMenu', 'Footer Menu');
   add_image_size('releaseThumbnail', 260, 260, true);
   add_image_size('releaseFull', 650, 650, true);
}

add_action('after_setup_theme', 'features');
