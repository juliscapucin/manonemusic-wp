<?php get_header();

while (have_posts()) {
  the_post();
?>

  <div class="container container--narrow page-section">

    <h2 class=""><?php the_title(); ?></h2>
    <div><?php
          $releaseDate = get_field('release_date');
          if ($releaseDate) {
            $formattedDate = new DateTime(get_field('release_date'));
            echo $formattedDate->format('M Y');
          }
          ?></div>
    <div class=""><?php the_content(); ?></div>

  </div>



<?php }

get_footer(); ?>