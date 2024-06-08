<?php get_header();

while (have_posts()) {
  the_post();
  $current_post_id = get_the_ID();  // Store the current post ID
?>

  <div class="w-full h-full max-w-wide mx-auto">
    <h2 class="text-headlineLarge"><?php the_title(); ?></h2>
    <div class="flex">
      <div class="w-1/3"><?php the_post_thumbnail(); ?></div>

      <div>
        <div>
          <?php
          $releaseDate = get_field('release_date');
          if ($releaseDate) {
            $formattedDate = new DateTime($releaseDate);
            echo $formattedDate->format('M Y');
          }
          ?>
        </div>

        <div class=""><?php the_excerpt(); ?></div>


        <?php
        $repeatable_fields = get_post_meta($post->ID, 'repeatable_fields', true); // Get the repeatable fields for tracks



        if ($repeatable_fields) {
          $jsonTracks = wp_json_encode($repeatable_fields);

          echo '<!-- wp:paragraph -->
          <p>Matt Rudge is the Founder and Executive Producer at MAN/ONE MUSIC.</p>
          <!-- /wp:paragraph -->';
        }

        ?>

      </div>

    </div>
  </div>

<?php }
