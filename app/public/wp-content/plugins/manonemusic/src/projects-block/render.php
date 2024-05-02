<?php

/**
 * Renders the projects block on the frontend.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 * @param WP_Block $block The block object.
 */

// print_r($block);
?>

<section class="min-w-screen h-screen min-h-svh p-8 text-secondary" <?php echo get_block_wrapper_attributes(); ?>>
	<p class="w-3/4 md:w-1/4 mt-32 md:mt-4"><?php echo esc_html($attributes['paragraph']); ?></p>
	<?php echo $content ?>
</section>