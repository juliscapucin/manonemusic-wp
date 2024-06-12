<?php

/**
 * Renders the projects / releases block on the frontend.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 * @param WP_Block $block The block object.
 * 
 * // print_r($block);
 */
?>



<div class="w-full space-y-2 ml-2 mb-16">
	<?php
	echo '<p>' . $attributes['releaseDate'] . '</p>';
	echo '<p>' . $attributes['projectDescription'] . '</p>';
	echo '<p><a href="' . $attributes['url'] . '" target="_blank" rel="noopener noreferrer">' . $attributes['label'] . '</a></p>';
	?>
</div>
<?php
