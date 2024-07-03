<?php

/**
 * Renders the projects / releases block on the frontend.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 * @param WP_Block $block The block object.
 * 
 * // print_r($block);
 */

// print_r($block);
$clip = get_post_meta(get_the_ID(), 'clip', true);
?>

<div class="mt-16 pr-16">
   <h2 class="text-labelLarge lg:text-labelXLarge font-bold mb-8"><?php echo esc_html($clip); ?></h2>
</div>