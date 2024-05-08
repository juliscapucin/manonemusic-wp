<?php
$card_link = $attributes['linkObject']['url']; ?>

<a class="project-card relative block w-40 bg-red aspect-square" href="<?php echo esc_url($card_link) ?>">
	<?php
	// echo $content;

	foreach ($block->inner_blocks as $inner_block) {
		$inner_content = $inner_block->inner_content ?? [];
		$url = $inner_block->name;
		$label = $inner_block->attributes['label'] ?? '';
	?>

		<?php
		// Check and render image (inner_content) if available
		if ($inner_block->name === 'core/image' && !empty($inner_content[0])) {
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