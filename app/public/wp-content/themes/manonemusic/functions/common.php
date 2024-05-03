<?php

function pageQuery($args)
{
   // Query for the page content
   $page = get_page_by_path($args['page']);
   if ($page) {
      echo apply_filters('the_content', $page->post_content);
   }
}
