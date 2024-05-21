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

?>

<div class='absolute w-full h-full flex justify-center items-center'>
   <?php
   foreach ($block->inner_blocks as $inner_block) {
      $inner_content = $inner_block->inner_content ?? [];
      $label = $inner_block->attributes['label'] ?? '';

      // Check and render image (inner_content) if available
      if ($inner_block->name === 'core/image' && !empty($inner_content[0])) {
         $inner_content[0] = str_replace('<figure', '<figure class="relative w-64 aspect-square"', $inner_content[0]);
         $inner_content[0] = str_replace('<img', '<img class="object-cover w-full h-full"', $inner_content[0]);
         echo $inner_content[0];
      }
   }
   ?>
</div>