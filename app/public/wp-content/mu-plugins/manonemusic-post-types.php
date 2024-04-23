<?php 
function postTypes(){
   register_post_type('release', array(
     'public' => true,
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
      'public' => true,
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
?>