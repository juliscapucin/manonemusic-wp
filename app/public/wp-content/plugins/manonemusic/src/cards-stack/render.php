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


$args = array(
   'post_type' => 'release',
   'posts_per_page' => -1,
   'orderby' => 'date',
   'order' => 'DESC'
);

$query = new WP_Query($args);

print_r($attributes['section']);
