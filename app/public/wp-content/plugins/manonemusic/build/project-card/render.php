<?php
$card_link = $attributes['linkObject']['url']; ?>

<div>
	<?php
	foreach ($block->inner_blocks as $inner_block) {
		if (!empty($inner_block->inner_content) && is_array($inner_block->inner_content)) {
	?>
			<a href="<?php echo esc_url($card_link); ?>"><?php echo $inner_block->inner_content[0]; ?></a>
		<?php } else {
		?>
			<a href="<?php echo esc_url($card_link); ?>"><?php echo esc_html($inner_block->attributes['label']); ?></a>
	<?php
		}
	}
	?>
</div>