<?php
if (isset($args['title']) && isset($args['title'])) {
   if ($args['tag'] === 'h1') {
      echo '<h1>' . $args['title'] . '</h1>';
   } else if ($args['tag'] === 'h2') {
      echo '<h2>' . $args['title'] . '</h2>';
   } else if ($args['tag'] === 'h3') {
      echo '<h3>' . $args['title'] . '</h3>';
   } else if ($args['tag'] === 'h4') {
      echo '<h4>' . $args['title'] . '</h4>';
   } else if ($args['tag'] === 'h5') {
      echo '<h5>' . $args['title'] . '</h5>';
   } else if ($args['tag'] === 'h6') {
      echo '<h6>' . $args['title'] . '</h6>';
   } else {
      echo '<h1>' . $args['title'] . '</h1>';
   }
}
