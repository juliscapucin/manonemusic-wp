<?php

/**
 * Block render logic for the custombutton block.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 */

// Get the block attributes.
$block_id = $attributes['blockId'];
$button_text = $attributes['text'];
$button_url = $attributes['linkObject']['url'];
$button_target = $attributes['isExternal'] ? '_blank' : '_self';
$button_className = $attributes['className'];

?>
// Output the block markup.
<a href=<?php esc_url($button_url); ?> target=<?php echo $button_target; ?> className="<?php echo esc_attr($button_className); ?>">
   <?php echo esc_html($button_text); ?>
</a>