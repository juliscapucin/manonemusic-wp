<!DOCTYPE html>
<html <?php language_attributes(); ?> data-theme='dark'>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>

<body class='site-body'>
  <header class='z-50 max-w-wide px-8 xl:px-32'>
    <span class="font-primary uppercase"><a href="/home">Man/One Music</a></span>
    <span class="js-search-trigger"><i class="fa fa-search" aria-hidden="true"></i></span>
    <i class="site-header__menu-trigger fa fa-bars" aria-hidden="true"></i>
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