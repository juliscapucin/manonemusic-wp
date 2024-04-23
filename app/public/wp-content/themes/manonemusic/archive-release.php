<?php
get_header();

// Query for the 'releases' page content
$page = get_page_by_path('releases');
if ($page) {
   echo '<h1>' . get_the_title($page->ID) . '</h1>';
   echo apply_filters('the_content', $page->post_content);
}

// Custom query for 'release' post type
$args = array(
   'post_type' => 'release',
   'posts_per_page' => -1, // -1 for all posts
   'meta_key' => 'release_date', // Custom field key
   'orderby' => 'meta_value_num', // Order by custom field value
   'order' => 'DESC', // Descending order
);
$releases_query = new WP_Query($args);

if ($releases_query->have_posts()) :
   while ($releases_query->have_posts()) : $releases_query->the_post(); ?>
      <div class="">
         <h2 class=""><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
      </div>
<?php endwhile;
   wp_reset_postdata(); // Reset the post data to the main query loop
endif;

get_footer();
?>