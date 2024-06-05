<?php
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
