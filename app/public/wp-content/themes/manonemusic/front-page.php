<?php get_header(); ?>

<div>
   <?php

   get_template_part('template_parts/headings', null, array(
      'title' => 'Front Page',
      'tag' => 'h1'
   ));

   echo '<div class="flex">';
   releases(['page' => 'releases']);
   projects(['page' => 'projects']);
   echo '</div>';
   ?>
</div>

<!-- <?php get_footer(); ?> -->