<?php get_header(); ?>



<div>
   <h2>Front page</h2>
   <?php
   echo '<div class="flex">';
   releases(['page' => 'releases']);
   projects(['page' => 'projects']);
   echo '</div>';
   ?>
</div>

<?php get_footer(); ?>