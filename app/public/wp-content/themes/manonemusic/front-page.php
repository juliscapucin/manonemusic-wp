<?php get_header(); ?>

<div>
   <h2>Front page</h2>
   <?php

   echo '<div class="flex">';
   get_template_part('template_parts/headings', null, array(
      'title' => 'The Title with args',
      'tag' => 'h1'
   ));
   releases(['page' => 'releases']);
   projects(['page' => 'projects']);
   echo '</div>';
   ?>
</div>

<?php get_footer(); ?>