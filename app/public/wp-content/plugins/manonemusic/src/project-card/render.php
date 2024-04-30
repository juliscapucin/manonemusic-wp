<?php
foreach ($block->inner_blocks as $inner_block) {
	if (!empty($inner_block->inner_content) && is_array($inner_block->inner_content)) {
		echo '<div>' . $inner_block->inner_content[0] . '</div>';
	} else {
		echo '<div>' . $inner_block->attributes['label'] . '</div>';
	}
}
