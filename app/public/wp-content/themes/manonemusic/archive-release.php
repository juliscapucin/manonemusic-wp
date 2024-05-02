<?php
get_header();
?>

<main class='h-[500px] overflow-y-scroll'>
   <?php
   pageQuery(['page' => 'releases']);
   ?>
</main>

<?php
get_footer();
