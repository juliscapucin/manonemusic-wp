<?php
get_header();

// Query for the 'releases' page content
$page = get_page_by_path('releases');
if ($page) {
   echo '<h1>' . get_the_title($page->ID) . '</h1>';
   echo apply_filters('the_content', $page->post_content);
}

while (have_posts()) {
   the_post();
?>
   <div class="release">
      <a href="<?php the_permalink() ?>">
         <h2><?php the_title(); ?></h2>
      </a>
      <span><?php the_field('release_date'); ?></span>
   </div>
<?php
}

get_footer();
?>