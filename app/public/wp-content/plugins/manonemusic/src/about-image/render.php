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

if (!isset($attributes['imgUrl']) || empty($attributes['imgUrl'])) {
   $siteUrl = get_site_url();
   $attributes['imgUrl'] = $siteUrl . '/wp-content/uploads/2024/06/about.webp';
}

if (!isset($attributes['imgAlt']) || empty($attributes['imgAlt'])) {
   $attributes['imgAlt'] = 'Placeholder image';
}

?>

<div class="md:absolute -top-[--header-height] left-0 right-0 md:h-[--container-height-desktop] flex justify-center items-center -z-10">
   <div class="w-full md:w-96 aspect-square relative overflow-clip rounded-sm">
      <img src="<?php echo esc_url($attributes['imgUrl']); ?>" alt="<?php echo esc_attr($attributes['imgAlt']); ?>" class="w-full h-full object-cover" />
   </div>
</div>