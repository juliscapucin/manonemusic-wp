<footer class="site-footer">

    <div class="site-footer__inner container container--narrow">

      <div class="group">

        <div class="site-footer__col-one">
          <h1 class="school-logo-text school-logo-text--alt-color"><a href="<?php echo site_url() ?>"><?php bloginfo('name'); ?></a></h1>
        </div>
        <div class="site-footer__col-four">
          <h3 class="headline headline--small">Connect With Us</h3>
          <nav>
            <?php
              wp_nav_menu(array(
                'theme_location' => 'footerMenu'
              ));
            ?>
          </nav>
        </div>
      </div>

    </div>
  </footer>

<?php wp_footer(); ?>
</body>
</html>