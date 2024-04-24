<?php

function releases()
{
   // Query for the 'releases' page content
   $page = get_page_by_path('releases');
   if ($page) {
      echo '<h1>' . get_the_title($page->ID) . '</h1>';
      echo apply_filters('the_content', $page->post_content);
   }

   while (have_posts()) {
      the_post();

      // Get the post thumbnail alt text
      $thumbnail_id = get_post_thumbnail_id();
      $alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);
?>
      <div class="release">
         <a href="<?php the_permalink(); ?>">
            <img src="<?php the_post_thumbnail_url('releaseThumbnail'); ?>" alt="<?php echo $alt; ?>">
            <h2><?php the_title(); ?></h2>
         </a>
         <span><?php the_field('release_date'); ?></span>
      </div>
<?php
   }
}
?>