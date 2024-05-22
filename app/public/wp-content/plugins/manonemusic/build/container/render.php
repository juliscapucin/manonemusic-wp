<?php

/**
 * Renders the projects block on the frontend.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 * @param WP_Block $block The block object.
 * 
 * // print_r($block);
 */

?>

<?php

// Initialize DOMDocument and load HTML content
$dom = new DOMDocument();
libxml_use_internal_errors(true); // Suppress warnings for malformed HTML
$dom->loadHTML($content, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
libxml_clear_errors();

// Add the $attributes['classes'] to the element with id 'outer-div'
$outerDivs = $dom->getElementsByTagName('div');
foreach ($outerDivs as $outerDiv) {
   $existingClass = $outerDiv->getAttribute('class');
   $outerDiv->setAttribute('class', $existingClass . ' ' . $attributes['classes']);
}

// Add classes to <figure> with id 'image-figure'
$imageFigures = $dom->getElementsByTagName('figure');
foreach ($imageFigures as $imageFigure) {
   $imageFigure->setAttribute('class', 'relative w-64 aspect-square overflow-clip');
}

// Add classes to <img> tags
$images = $dom->getElementsByTagName('img');
if ($images->length > 0) {
   foreach ($images as $image) {
      $existingClass = $image->getAttribute('class');
      $image->setAttribute('class', $existingClass . ' w-full h-full object-cover');
   }
} else {
   echo "No <img> tags found.";
}

// Save the modified HTML content
$content = $dom->saveHTML();
?>

<?php echo $content; ?>