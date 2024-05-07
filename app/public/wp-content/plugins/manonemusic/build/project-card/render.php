<?php
$card_link = esc_url($attributes['linkObject']['url']);
?>

<div class="project-card">
	<?php
	foreach ($block->inner_blocks as $inner_block) {
		// Extract image and label
		$inner_content = $inner_block->inner_content ?? [];
		$label = $inner_block->attributes['label'] ?? '';

		// Start the link element
		echo '<a class="relative block w-80 aspect-square overflow-clip bg-red [&>img]:object-cover" href="' . $card_link . '">';

		// Output the image if available
		if (!empty($inner_content)) {
			echo $inner_content[0];
		}

		// Output the label if available
		if (!empty($label)) {
			echo '<span class="absolute bg-red uppercase w-auto p-2">' . esc_html($label) . '</span>';
		}

		// End the link element
		echo '</a>';
	}
	?>
</div>