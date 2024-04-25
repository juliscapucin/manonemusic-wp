<?php
function postTypes()
{
   register_post_type('release', array(
      'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
      'rewrite' => array('slug' => 'releases'),
      'has_archive' => true,
      'public' => true,
      'show_in_rest' => true,
      'labels' => array(
         'name' => 'Releases',
         'add_new_item' => 'Add New Release',
         'edit_item' => 'Edit Release',
         'all_items' => 'All Releases',
         'singular_name' => 'Release'
      ),
      'menu_icon' => 'dashicons-album'
   ));

   register_post_type('project', array(
      'supports' => array('title', 'editor', 'thumbnail'),
      'rewrite' => array('slug' => 'projects'),
      'has_archive' => true,
      'public' => true,
      'show_in_rest' => true,
      'labels' => array(
         'name' => 'Projects',
         'add_new_item' => 'Add New Project',
         'edit_item' => 'Edit Project',
         'all_items' => 'All Projects',
         'singular_name' => 'Project'
      ),
      'menu_icon' => 'dashicons-portfolio'
   ));
}

add_action('init', 'postTypes');
