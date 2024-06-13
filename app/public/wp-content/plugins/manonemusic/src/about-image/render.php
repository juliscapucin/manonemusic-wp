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

<div class="absolute -top-[--header-height] w-screen h-[--container-height-desktop] max-w-wide mx-auto flex justify-center items-center -z-10">
   <div class="w-96 aspect-square relative overflow-clip">
      <img src="<?php echo esc_url($attributes['imgUrl']); ?>" alt="<?php echo esc_attr($attributes['imageAlt']); ?>" class="w-full h-full object-cover" />
   </div>
</div>