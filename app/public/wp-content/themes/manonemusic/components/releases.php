<?php

function releases($args)
{
   // Query for the 'releases' page content
   $page = get_page_by_path($args['page']);
   if ($page) {
      echo apply_filters('the_content', $page->post_content);
   }

   // Set up a new WP_Query to fetch posts
   $query_args = array(
      'post_type' => 'release', // Adjust to your post type
      'posts_per_page' => -1
   );
   $query = new WP_Query($query_args);


   echo '<div class="flex gap-4">';
   while ($query->have_posts()) {
      $query->the_post();

      // Get the post thumbnail alt text
      $thumbnail_id = get_post_thumbnail_id();
      $alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);
?>
      <a href="<?php the_permalink(); ?>">
         <img src="<?php the_post_thumbnail_url('imgThumbnail'); ?>" alt="<?php echo $alt; ?>">
         <h2><?php the_title(); ?></h2>
      </a>
<?php
   }
   echo '</div></div>';
}
?>