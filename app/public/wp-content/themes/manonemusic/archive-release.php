<?php
get_header();

$page = get_page_by_path('releases');
if ($page) {
   echo '<h1>' . get_the_title($page->ID) . '</h1>';
   echo apply_filters('the_content', $page->post_content);
}

while (have_posts()) {
   the_post(); ?>
   <div class="">
      <h2 class=""><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

      <div class="">
         <?php the_excerpt(); ?>
         <p><a class="" href="<?php the_permalink(); ?>">Continue reading &raquo;</a></p>
      </div>

   </div>
<?php }
echo paginate_links();
?>

<?php
get_footer();
?>