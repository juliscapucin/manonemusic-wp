<!DOCTYPE html>
<html <?php language_attributes(); ?> data-theme='dark'>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>

<body>
  <header>
    <span class="font-primary uppercase"><a href="<?php echo site_url() ?>">Man/One Music</a></span>
    <span class="js-search-trigger"><i class="fa fa-search" aria-hidden="true"></i></span>
    <i class="site-header__menu-trigger fa fa-bars" aria-hidden="true"></i>
    <nav class="flex">
      <?php wp_nav_menu(array(
        'theme_location' => 'headerMenu',
        'container' => false,
        'menu_class' => 'flex gap-4 uppercase font-primary',
      )) ?>
  </header>