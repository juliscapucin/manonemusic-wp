<?php

/**
 * Title: Header
 * Slug: manonemusic/header
 * Categories: header
 * Block Types: core/template-part/header
 */
?>

<header class="fixed flex justify-between items-center h-16 min-w-full max-w-wide px-8 xl:px-32 z-50">
   <span class="font-primary uppercase"><a href="/home">Man/One Music</a></span>
   <nav class="flex">
      <?php wp_nav_menu(array(
         'theme_location' => 'headerMenu',
         'container' => false,
         'menu_class' => 'flex gap-8 uppercase font-primary',
         'link_before' => '<span class="header-link">',
         'link_after' => '</span>'
      )) ?>
   </nav>
</header>