<section class="min-w-screen h-screen min-h-svh p-8" <?php echo get_block_wrapper_attributes(); ?>>
	<div class="flex mt-48 w-screen pr-16">
		<h1 class="text-6xl w-3/4 md:w-1/4 mt-32 md:mt-4">
			<?php echo esc_html($attributes['title']); ?>
		</h1>
	</div>
	<p class="w-3/4 md:w-1/4 mt-32 md:mt-4"><?php echo esc_html($attributes['paragraph']); ?></p>
</section>