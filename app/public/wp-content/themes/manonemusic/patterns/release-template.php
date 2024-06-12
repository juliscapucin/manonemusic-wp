<?php

/**
 * Title: Release Template
 * Slug: manonemusic/release-template
 * Categories: Post
 */
?>

<!-- wp:group {"tagName":"main","className":"is-style-group-page-container","layout":{"type":"constrained"}} -->
<main class="wp-block-group is-style-group-page-container"><!-- wp:columns -->
   <div class="wp-block-columns"><!-- wp:column {"width":"85%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30"}}}} -->
      <div class="wp-block-column" style="padding-right:var(--wp--preset--spacing--30);flex-basis:85%"><!-- wp:group {"layout":{"type":"constrained"}} -->
         <div class="wp-block-group"><!-- wp:post-title {"level":1,"className":"is-style-post-title-mb text-headlineLarge"} /-->

            <!-- wp:columns {"verticalAlignment":"top","className":"mt-8"} -->
            <div class="wp-block-columns are-vertically-aligned-top mt-8">
               <!-- wp:column {"verticalAlignment":"top","width":"33.34%"} -->
               <div class="wp-block-column is-vertically-aligned-top" style="flex-basis:33.34%">
                  <!-- wp:post-featured-image {"aspectRatio":"1","className":"is-style-featured-image-square-mr"} /-->
               </div>
               <!-- /wp:column -->

               <!-- wp:column {"verticalAlignment":"top","width":"66.66%"} -->
               <div class="wp-block-column is-vertically-aligned-top" style="flex-basis:66.66%">

                  <?php
                  $post_blocks = parse_blocks(get_post()->post_content);
                  $tracklist = get_post_meta(get_the_ID(), 'repeatable_fields', true);

                  foreach ($post_blocks as $block) {
                     if ($block['blockName'] === 'manonemusic/project-info') {
                        echo render_block($block);
                     }
                  }

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
      <div class="wp-block-column" style="flex-basis:15%">
         <!-- wp:manonemusic/cards-stack {"section":"release","variant":"detail-page","classes":"w-full h-full overflow-y-scroll pt-16 pr-8 pb-8 space-y-8"} -->
         <div class="wp-block-manonemusic-cards-stack"></div>
         <!-- /wp:manonemusic/cards-stack -->
      </div>
      <!-- /wp:column -->
   </div>
   <!-- /wp:columns -->
</main>
<!-- /wp:group -->