<?php

/**
 * Renders the projects / releases block on the frontend.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 * @param WP_Block $block The block object.
 * 
 */

// Debugging: Print the entire attributes array
// echo '<pre>';
// print_r($attributes);
// echo '</pre>';

?>

<div class="w-full space-y-2 ml-2 mb-16">
	<?php
	// Display release date and project description
	echo '<p>Released ' . esc_html($attributes['releaseDate']) . '</p>';
	echo '<p>' . esc_html($attributes['projectDescription']) . '</p>';

	// Check and display the URL
	if (isset($attributes['url']) && !empty($attributes['url'])) {
		$escaped_url = esc_url($attributes['url']);
		echo '<p><a href="' . $escaped_url . '" target="_blank" rel="noopener noreferrer">' . esc_html($attributes['label']) . '</a></p>';
	}
	?>
</div>