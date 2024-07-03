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

// Get the current post ID
$post_id = get_the_ID();

// Retrieve the ACF 'release_date' field
$release_date = get_field('release_date', $post_id);

// Function to format the release date
function format_release_date($date_string)
{
	$date = DateTime::createFromFormat('d/m/Y', $date_string);
	if ($date) {
		return $date->format('F Y');
	}
	return $date_string; // return the original string if parsing fails
}

?>

<div class="w-full space-y-2 ml-2 mb-16">
	<?php

	if (isset($release_date) && !empty($release_date)) {
		$formatted_date = format_release_date($release_date);
		echo '<p>Released ' . esc_html($formatted_date) . '</p>';
	}

	if (isset($attributes['projectDescription']) && !empty($attributes['projectDescription'])) {
		echo '<p>' . esc_html($attributes['projectDescription']) . '</p>';
	}

	if (isset($attributes['url']) && !empty($attributes['url'])) {
		$escaped_url = esc_url($attributes['url']);
		echo '<p><a href="' . $escaped_url . '" target="_blank" rel="noopener noreferrer">' . esc_html($attributes['label']) . '</a></p>';
	}
	?>
</div>