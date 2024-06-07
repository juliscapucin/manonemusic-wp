<?php

/**
 * Title: Release Pattern
 * Slug: manonemusic/release-pattern
 * Categories: Post
 */
?>

<!-- wp:group {"tagName":"main","className":"is-style-group-page-container","layout":{"type":"constrained"}} -->
<main class="wp-block-group is-style-group-page-container"><!-- wp:columns -->
   <div class="wp-block-columns"><!-- wp:column {"width":"85%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30"}}}} -->
      <div class="wp-block-column" style="padding-right:var(--wp--preset--spacing--30);flex-basis:85%"><!-- wp:group {"layout":{"type":"constrained"}} -->
         <div class="wp-block-group"><!-- wp:post-title {"level":1,"className":"is-style-post-title-mb text-headlineLarge"} /-->

            <!-- wp:columns {"verticalAlignment":"top","className":"is-style-columns-full"} -->
            <div class="wp-block-columns are-vertically-aligned-top is-style-columns-full">
               <!-- wp:column {"verticalAlignment":"top","width":"33.34%"} -->
               <div class="wp-block-column is-vertically-aligned-top" style="flex-basis:33.34%">
                  <!-- wp:post-featured-image {"aspectRatio":"1","className":"is-style-featured-image-square-mr"} /-->
               </div>
               <!-- /wp:column -->

               <!-- wp:column {"verticalAlignment":"top","width":"66.66%"} -->
               <div class="wp-block-column is-vertically-aligned-top" style="flex-basis:66.66%">
                  <!-- wp:post-excerpt /-->

                  <!-- wp:paragraph -->
                  <p>Matt Rudge is the Founder and Executive Producer at MAN/ONE MUSIC. He has over ten years of experience producing brand stories, crafting customer journeys, and implementing impactful sound design infrastructures for agencies to scale their audio output.</p>
                  <!-- /wp:paragraph -->

                  <?php
                  $tracklist = get_post_meta(get_the_ID(), 'repeatable_fields', true);

                  if ($tracklist) {
                     $jsonTracks = wp_json_encode($tracklist);

                     echo '<!-- wp:manonemusic/track {"tracklist": ' . $jsonTracks . '} /-->';
                  }

                  ?>

               </div>

               <!-- /wp:column -->
            </div>
            <!-- /wp:columns -->
         </div>
         <!-- /wp:group -->
      </div>
      <!-- /wp:column -->

      <!-- wp:column {"width":"15%"} -->
      <div class="wp-block-column" style="flex-basis:15%"><!-- wp:manonemusic/cards-stack {"section":"release","variant":"detail-page","classes":"w-full h-full overflow-y-scroll pt-16 pr-8 pb-8 space-y-8"} -->
         <div class="wp-block-manonemusic-cards-stack"></div>
         <!-- /wp:manonemusic/cards-stack -->
      </div>
      <!-- /wp:column -->
   </div>
   <!-- /wp:columns -->
</main>
<!-- /wp:group -->