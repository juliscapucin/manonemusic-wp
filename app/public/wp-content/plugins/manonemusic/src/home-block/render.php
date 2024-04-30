<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<section class="w-screen h-screen min-h-svh bg-slate-500" <?php echo get_block_wrapper_attributes(); ?>>
   <div class="flex mt-48 w-screen pr-16">
      <h2 class="w-3/4 md:w-1/4 mt-32 md:mt-4">
         <?php echo esc_html($attributes['slogan']); ?>
      </h2>
   </div>
   <span>Location: Amsterdam</span>
   <p class="text-4xl w-3/4 md:w-1/4 mt-32 md:mt-4"><?php echo esc_html($attributes['paragraph']); ?></p>
</section>