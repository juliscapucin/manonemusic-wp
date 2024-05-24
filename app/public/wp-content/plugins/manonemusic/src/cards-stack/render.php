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
   'post_type' => $attributes['section'],
   'posts_per_page' => -1,
   'orderby' => 'date',
   'order' => 'DESC'
);

$query = new WP_Query($args);
$content = '';

if ($query->have_posts()) {
   while ($query->have_posts()) {
      $query->the_post();

      $permalink = get_the_permalink();
      $title = get_the_title();
      $thumbnail_url = get_the_post_thumbnail_url();

      $content .= <<<HTML
      <a href="{$permalink}" class="block relative w-full aspect-square">
         <img class="w-full h-full object-cover" src='{$thumbnail_url}' />
         <p class="">{$title}</p>
      </a>
      HTML;
   }
   wp_reset_postdata();
};
?>
<div class="absolute top-0 right-32 w-96 h-full overflow-y-scroll pt-16 pr-8 pb-8 space-y-8 z-40">
   <?php
   echo $content;
   ?>
</div>
<?php
