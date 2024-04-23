<?php get_header();

  while(have_posts()) {
    the_post();
     ?>

    <div class="container container--narrow page-section">

      <h2 class=""><?php the_title(); ?></h2>
      <div class=""><?php the_content(); ?></div>

    </div>
    

    
  <?php }

get_footer();?>