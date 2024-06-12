<?php

/**
 * Title: Film Template
 * Slug: manonemusic/film-template
 * Categories: Post
 */

// Get the blocks for the current post
$post_blocks = parse_blocks(get_post()->post_content);
?>



<!-- wp:group {"tagName":"main","className":"is-style-group-page-container","layout":{"type":"constrained"}} -->
<main class="wp-block-group is-style-group-page-container">
   <!-- wp:post-title {"level":1,"className":"is-style-post-title-mb text-headlineLarge"} /-->
   <!-- wp:columns -->
   <div class="wp-block-columns">
      <!-- wp:column {"width":"85%","classname": "pr-24"} -->
      <div class="wp-block-column pr-24" style="flex-basis:85%">

         <!-- wp:columns {"verticalAlignment":"top","className":"mt-8"} -->
         <div class="wp-block-columns are-vertically-aligned-top mt-8">
            <!-- wp:column {"verticalAlignment":"top","width":"33.34%"} -->
            <div class="wp-block-column is-vertically-aligned-top" style="flex-basis:33.34%">
               <!-- wp:post-featured-image {"aspectRatio":"3:4","className":"is-style-featured-image-square-mr"} /-->
            </div>
            <!-- /wp:column -->

            <!-- wp:column {"verticalAlignment":"top","width":"66.66%"} -->
            <div class="wp-block-column is-vertically-aligned-top" style="flex-basis:66.66%">
               <?php

               // Loop through the blocks to find and render the custom block
               foreach ($post_blocks as $block) {
                  if ($block['blockName'] === 'manonemusic/project-info') {
                     echo render_block($block);
                  }
               }
               ?>

            </div>

            <!-- /wp:column -->
         </div>
         <!-- /wp:columns -->

         <div class="mt-16">
            <?php

            // Loop through the blocks to find and render the custom block
            foreach ($post_blocks as $block) {
               if ($block['blockName'] === 'core/embed') {
                  echo render_block($block);
               }
            }
            ?></div>

      </div>
      <!-- /wp:column -->

      <!-- wp:column {"width":"15%"} -->
      <div class="wp-block-column" style="flex-basis:15%">
         <!-- wp:manonemusic/cards-stack {"section":"film","variant":"detail-page","classes":"fixed w-40 h-full top-0 right-40 overflow-y-scroll pt-16 pr-8 pb-8 space-y-16"} -->
         <div class="wp-block-manonemusic-cards-stack"></div>
         <!-- /wp:manonemusic/cards-stack -->
      </div>
      <!-- /wp:column -->
   </div>
   <!-- /wp:columns -->
</main>
<!-- /wp:group -->