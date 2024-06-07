<?php

/**
 * Renders the projects block on the frontend.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 * @param WP_Block $block The block object.
 * 
 */

// $card_link = $attributes['linkObject']['url'];
// print_r($block);
?>

<div class="w-full h-16 bg-faded-30">
	<?php

	foreach ($block->inner_blocks as $inner_block) {
		$inner_content = $inner_block->inner_content ?? [];
	?>

	<?php
		if ($inner_block->name === 'core/paragraph') {
			// print_r($inner_block);
			// print_r($image_attributes);
			echo $inner_block->inner_content[0];
		}
	}
	?>
</div>