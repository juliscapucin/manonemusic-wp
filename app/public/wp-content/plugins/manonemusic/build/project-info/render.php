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



<div class="w-full space-y-2 mb-16">
	<?php
	echo '<p>' . $attributes['releaseDate'] . '</p>';
	echo '<p>' . $attributes['projectDescription'] . '</p>';
	if (isset($attributes['projectUrl']) && !empty($attributes['projectUrl'])) {
		$projectUrl = esc_url($attributes['projectUrl']);
		echo '<a href="' . $projectUrl . '">View project</a>';
	}

	?>
</div>
<?php
