<?php

/**
 * Renders the projects block on the frontend.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 * @param WP_Block $block The block object.
 * 
 * // print_r($block);
 */

$classes = esc_attr($attributes['classes']);
$content = '';


foreach ($block->inner_blocks as $inner_block) {
   $blockName = $inner_block->name;


   // Case: image
   if ($blockName === 'core/image') {
      $imageAttributes = $inner_block->attributes;
      $imageId = $imageAttributes['id'];
      $imageAlt = $imageAttributes['alt'];
      $imageClasses = $imageAttributes['className'];


      // Debugging: Print the entire attributes array
      // echo '<pre>';
      // print_r($imageAttributes);
      // echo '</pre>';

      $image = wp_get_attachment_image($imageId, 'full', false, array(
         'alt' => $imageAlt,
         'class' => $imageClasses
      ));

      $content .= <<<HTML
      <div class="{$classes}">
         <figure class="relative w-96 aspect-square">
            {$image}
         </figure>
      </div>
      HTML;
   }
}

echo $content;
