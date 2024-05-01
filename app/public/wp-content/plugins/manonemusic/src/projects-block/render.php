<section class="min-w-screen h-screen min-h-svh p-8" <?php echo get_block_wrapper_attributes(); ?>>
	<p class="w-3/4 md:w-1/4 mt-32 md:mt-4"><?php echo esc_html($attributes['paragraph']); ?></p>
	<?php
	foreach ($block->inner_blocks as $inner_block) {
		if ($inner_block->blockName === 'manonemusic/project-card') {
			echo 'hello project-card';
		} else if ($inner_block->blockName === 'manonemusic/custom-heading') {
			echo 'hello custom-heading';
		} else {
			echo 'hello else';
		}
	}
	?>
</section>