<?php 
function postTypes(){
   register_post_type('event', array(
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
 }
 
 add_action('init', 'postTypes');
?>