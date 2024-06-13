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

function format_date($dateString)
{
	// Ensure the input date string is 8 characters long
	if (strlen($dateString) !== 8) {
		throw new Exception("Invalid date string");
	}

	// Extract the year, month, and day from the string
	$year = substr($dateString, 0, 4);
	$month = substr($dateString, 4, 2);

	// Create a DateTime object using the extracted values
	$date = DateTime::createFromFormat('Y-m', "$year-$month");

	// Format the date to "Month Year"
	return $date->format('F Y');
}

// Get the current post ID
$post_id = get_the_ID();

// Retrieve the ACF 'release_date' field
$release_date = get_field('release_date', $post_id);

$post_meta = get_post_meta($post_id, 'release_date', true);
$formattedDate = format_date($post_meta);

?>

<div class="w-full space-y-2 ml-2 mb-16">
	<?php

	if (isset($formattedDate) && !empty($formattedDate)) {
		echo '<p>Released ' . esc_html($formattedDate) . '</p>';
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