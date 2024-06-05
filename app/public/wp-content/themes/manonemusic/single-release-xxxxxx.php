<?php get_header();

while (have_posts()) {
  the_post();
  $current_post_id = get_the_ID();  // Store the current post ID
?>

  <div class="container container--narrow page-section">
    <h2 class=""><?php the_title(); ?></h2>
    <div><?php
          $releaseDate = get_field('release_date');
          if ($releaseDate) {
            $formattedDate = new DateTime($releaseDate);
            echo $formattedDate->format('M Y');
          }
          ?></div>
    <div>
      <div class=""><?php the_post_thumbnail('releaseFull'); ?></div>
      <div class=""><?php the_content(); ?></div>
    </div>
    <ul>
      <?php
      $repeatable_fields = get_post_meta($post->ID, 'repeatable_fields', true); // Get the repeatable fields for tracks
      if ($repeatable_fields)
        foreach ($repeatable_fields as $track) { ?>
        <li><a href="<?php echo $track['url'] ?>"><?php echo $track['name']; ?></a></li>
      <?php }
      ?>
    </ul>
  </div>

  <?php }


// Custom query for 'release' post type
$args = array(
  'post_type'      => 'release',
  'posts_per_page' => -1, // -1 for all posts
  'meta_key'       => 'release_date', // Custom field key
  'orderby'        => 'meta_value_num', // Order by custom field value
  'order'          => 'DESC', // Descending order
  'post__not_in'   => array($current_post_id) // Exclude the current post
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