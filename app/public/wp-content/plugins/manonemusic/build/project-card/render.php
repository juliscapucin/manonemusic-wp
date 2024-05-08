<?php
$card_link = $attributes['linkObject']['url'];
// print_r($block);
?>

<a class="project-card block w-64 aspect-square mb-8" href="<?php echo esc_url($card_link); ?>">
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

		// Check and render label if available
		if (!empty($label)) {
		?>
			<span class="uppercase w-auto p-2"><?php echo esc_html($label) ?></span>
		<?php
		}
		?>
	<?php
	}
	?>
</a>