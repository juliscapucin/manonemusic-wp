<?php

/**
 * Title: Commercial Pattern
 * Slug: manonemusic/commercial-pattern
 * Categories: Post
 */
?>

<!-- wp:group {"tagName":"main","className":"is-style-group-page-container","layout":{"type":"constrained"}} -->
<main class="wp-block-group is-style-group-page-container"><!-- wp:columns -->
   <div class="wp-block-columns"><!-- wp:column {"width":"85%","classname": "pr-24"} -->
      <div class="wp-block-column pr-24" style="flex-basis:85%"><!-- wp:group {"layout":{"type":"constrained"}} -->
         <div class="wp-block-group"><!-- wp:post-title {"level":1,"className":"is-style-post-title-mb text-headlineLarge"} /-->

            <!-- wp:columns {"verticalAlignment":"top"} -->
            <div class="wp-block-columns are-vertically-aligned-top">
               <!-- wp:column {"verticalAlignment":"top","width":"33.34%"} -->
               <div class="wp-block-column is-vertically-aligned-top" style="flex-basis:33.34%">
                  <!-- wp:post-featured-image {"aspectRatio":"4:3","className":"is-style-featured-image-square-mr"} /-->
               </div>
               <!-- /wp:column -->

               <!-- wp:column {"verticalAlignment":"top","width":"66.66%"} -->
               <div class="wp-block-column is-vertically-aligned-top" style="flex-basis:66.66%">

                  <?php
                  // Get the blocks for the current post
                  $post_blocks = parse_blocks(get_post()->post_content);

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
         </div>
         <!-- /wp:group -->

         <?php

         $video = get_post_meta(get_the_ID(), 'video_links', true);

         if ($video) {
            echo '<!-- wp:embed {"url":"' . $video[0]['url'] . '","type":"video","providerNameSlug":"vimeo","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-vimeo wp-block-embed-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio my-16"><div class="wp-block-embed__wrapper">
https://vimeo.com/98997745
</div></figure>
<!-- /wp:embed -->';
         }
         ?>

      </div>
      <!-- /wp:column -->

      <!-- wp:column {"width":"15%"} -->
      <div class="wp-block-column" style="flex-basis:15%"><!-- wp:manonemusic/cards-stack {"section":"commercial","variant":"detail-page","classes":"w-full h-full overflow-y-scroll pt-16 pr-8 pb-8 space-y-8"} -->
         <div class="wp-block-manonemusic-cards-stack"></div>
         <!-- /wp:manonemusic/cards-stack -->
      </div>
      <!-- /wp:column -->
   </div>
   <!-- /wp:columns -->
</main>
<!-- /wp:group -->