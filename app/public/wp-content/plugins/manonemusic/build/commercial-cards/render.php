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
   'post_type' => 'commercial',
   'posts_per_page' => -1,
   'meta_key' => 'release_date',
   'orderby' => 'meta_value',
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
      <a href="{$permalink}" class="flex-1 relative w-40 max-w-40">
         <div href="{$permalink}" class="w-full aspect-video overflow-clip">
            <img class="w-full object-contain" src='{$thumbnail_url}' />
         </div>
         <p class="text-labelSmall md:text-labelMedium lg:text-labelLarge mt-2">{$title}</p>
      </a>
      HTML;
   }
   wp_reset_postdata();
};

?>
<div class="flex w-full gap-32 mt-16">
   <?php
   echo $content;
   ?>
</div>
<?php
