<?php
$card_link = $attributes['linkObject']['url'];
// print_r($block);
?>

<a class="project-card" href="<?php echo esc_url($card_link); ?>">
	<?php

	foreach ($block->inner_blocks as $inner_block) {
		$inner_content = $inner_block->inner_content ?? [];
		$label = $inner_block->attributes['label'] ?? '';
	?>

	<?php
		// Check and render image (inner_content) if available
		if ($inner_block->name === 'core/image' && !empty($inner_content[0])) {
			// print_r($inner_block);
			// print_r($image_attributes);
			echo $inner_content[0];
		}
	}
	?>
</a>