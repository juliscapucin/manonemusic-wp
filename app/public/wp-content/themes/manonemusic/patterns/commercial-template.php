<?php

/**
 * Title: Commercial Template
 * Slug: manonemusic/commercial-template
 * Categories: Post
 */

// Get the blocks for the current post
$post_blocks = parse_blocks(get_post()->post_content);
$project_info_block = '';
$embed_block = '';
$metadata_example_block = '';

// Loop through the blocks to find the custom blocks and store them
foreach ($post_blocks as $block) {
   if ($block['blockName'] === 'manonemusic/project-info') {
      $project_info_block = render_block($block);
   }
   if ($block['blockName'] === 'core/embed') {
      $embed_block = render_block($block);
   }
   if ($block['blockName'] === 'manonemusic/metadata-example') {
      $metadata_example_block = render_block($block);
   }
}
?>



<!-- wp:group {"tagName":"main","className":"is-style-group-page-container","layout":{"type":"constrained"}} -->
<main class="wp-block-group is-style-group-page-container">
   <!-- wp:columns -->
   <div class="wp-block-columns">
      <!-- wp:column {"width":"85%","classname": "pr-24"} -->
      <div class="wp-block-column pr-24" style="flex-basis:85%">
         <!-- wp:group {"layout":{"type":"constrained"}} -->
         <div class="wp-block-group">
            <!-- wp:post-title {"level":1,"className":"is-style-post-title-mb text-headlineLarge"} /-->

            <?php
            echo $project_info_block;
            ?>

         </div>
         <!-- /wp:group -->

         <?php
         echo $embed_block;
         echo $metadata_example_block;
         ?>

      </div>
      <!-- /wp:column -->

      <!-- wp:column {"width":"15%"} -->
      <div class="wp-block-column" style="flex-basis:15%">

         <!-- wp:manonemusic/cards-stack {"section":"commercial","variant":"detail-page","classes":"fixed w-40 h-full top-0 right-40 overflow-y-scroll pt-16 pr-8 pb-8 space-y-16"} -->
         <div class="wp-block-manonemusic-cards-stack"></div>
         <!-- /wp:manonemusic/cards-stack -->
      </div>
      <!-- /wp:column -->
   </div>
   <!-- /wp:columns -->
</main>
<!-- /wp:group -->