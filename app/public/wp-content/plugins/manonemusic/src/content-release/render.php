<?php

/**
 * Renders the projects block on the frontend.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 * @param WP_Block $block The block object.
 * 
 */

// print_r($block);
?>

<div class="w-full h-full max-w-wide mx-auto mt-32">
	<?php
	// echo $content;

	$innerBlocks = $block->parsed_block['innerBlocks'];

	foreach ($innerBlocks as $innerBlock) {
		if ($innerBlock['blockName'] === 'manonemusic/track') {
			$tracklist = wp_json_encode($innerBlock['attrs']['tracklist']);

			// print_r($tracklist);
			echo '<!-- wp:manonemusic/track {"tracklist":' . $tracklist . '} /-->';
		}
	}

	?>
	<h2>Hello</h2>
</div>

<?php
$tracklist = get_post_meta(get_the_ID(), 'repeatable_fields', true);

if ($tracklist) {
	$jsonTracks = wp_json_encode($tracklist);

	echo '<!-- wp:manonemusic/track {"tracklist": ' . $jsonTracks . '} /-->';
}

?>