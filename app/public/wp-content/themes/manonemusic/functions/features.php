<?php
function features()
{
   add_theme_support('title-tag');
   add_theme_support('post-thumbnails');
   add_theme_support('editor-styles');
   add_editor_style(array('build/style.css'));
   register_nav_menu('headerMenu', 'Header Menu');
   register_nav_menu('footerMenu', 'Footer Menu');
   add_image_size('imgThumbnail', 260, 260, true);
   add_image_size('imgFull', 650, 650, true);
}

add_action('after_setup_theme', 'features');
