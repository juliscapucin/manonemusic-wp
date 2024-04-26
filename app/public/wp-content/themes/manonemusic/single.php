<?php

get_header();

while (have_posts()) {
  the_post();
?>

  <div class="container container--narrow page-section">
    <div class="metabox metabox--position-up metabox--with-home-link">
      <p><a class="metabox__blog-home-link" href="<?php echo site_url('/posts'); ?>"><i class="fa fa-home" aria-hidden="true"></i> Blog Home</a> <span class="metabox__main">Posted by <?php the_author_posts_link(); ?> on <?php the_time('n.j.y'); ?> in <?php echo get_the_category_list(', '); ?></span></p>
    </div>

    <h2 class=""><?php the_title(); ?></h2>
    <div class=""><?php the_content(); ?></div>

  </div>



<?php }

get_footer();

?>