<footer class="site-footer">
  <div class="site-footer__col-one">
    <span class=""><a href="<?php echo site_url() ?>"><?php bloginfo('name'); ?></a></span>
  </div>
  <nav class="flex">
    <?php
    wp_nav_menu(array(
      'theme_location' => 'footerMenu'
    ));
    ?>
  </nav>
</footer>
<?php wp_footer(); ?>
</body>

</html>