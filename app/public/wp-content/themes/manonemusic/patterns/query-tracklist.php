<?php

/**
 * Title: Query Tracklist
 * Slug: manonemusic/query-tracklist
 * Categories: Post
 */
?>

<!-- wp:paragraph {"className":"is-style-indent-left"} -->
<p class="is-style-indent-left">Tracklist</p>
<!-- /wp:paragraph -->

<?php
$repeatable_fields = get_post_meta(get_the_ID(), 'repeatable_fields', false);
// print_r($repeatable_fields);
if ($repeatable_fields) {
   foreach ($repeatable_fields as $field) {
      $jsonFields = wp_json_encode($field);
      echo '<!-- wp:manonemusic/track {"tracklist": ' . $jsonFields . '} -->
      <div class="wp-block-manonemusic-track"></div>
      <!-- /wp:manonemusic/track -->';
   }
}
