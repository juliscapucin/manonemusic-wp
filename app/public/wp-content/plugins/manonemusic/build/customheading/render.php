<?php

/**
 * Renders the projects block on the frontend.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 * @param WP_Block $block The block object.
 */

?>

<?php

$heading_tags = ['h1', 'h2', 'h3'];
$css_classes = 'text-secondary font-primary uppercase';
$font_sizes = [
   'h1' => 'text-8xl',
   'h2' => 'text-6xl',
   'h3' => 'text-4xl',
];

$tag = in_array($attributes['tag'], $heading_tags) ? $attributes['tag'] : 'h1';
$font_size = $font_sizes[$tag] ?? 'text-8xl'; // Default to 'h1' font size

?>
<div>
   <?php echo "<$tag class=\"$css_classes $font_size\">" . esc_html($content) . "</$tag>"; ?>
</div>