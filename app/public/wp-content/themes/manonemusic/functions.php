<?php

function files()
{
  wp_enqueue_script('main-university-js', get_theme_file_uri('/build/index.js'), array('jquery'), '1.0', true);
  wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
  wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
  wp_enqueue_style('university_main_styles', get_theme_file_uri('/build/style-index.css'));
  wp_enqueue_style('university_extra_styles', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'files');

function features()
{
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  register_nav_menu('headerMenu', 'Header Menu');
  register_nav_menu('footerMenu', 'Footer Menu');
  add_image_size('professorLandscape', 400, 260, true);
  add_image_size('professorPortrait', 480, 650, true);
  add_image_size('pageBanner', 1500, 350, true);
}

add_action('after_setup_theme', 'features');

// Edit default queries
function adjust_queries($query)
{
  if (!is_admin() and is_post_type_archive('project') and $query->is_main_query()) {
    $query->set('orderby', 'title');
    $query->set('order', 'ASC');
    $query->set('posts_per_page', -1);
  }

  if (!is_admin() and is_post_type_archive('release') and $query->is_main_query()) {
    $query->set('meta_key', 'release_date');
    $query->set('orderby', 'meta_value_num');
    $query->set('order', 'DESC');
    $query->set('posts_per_page', -1);
  }
}

add_action('pre_get_posts', 'adjust_queries');
