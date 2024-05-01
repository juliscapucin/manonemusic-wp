<?php
if (isset($attributes['title']) && isset($attributes['title'])) {
   if ($attributes['tag'] === 'h1') {
      echo '<h1>' . $attributes['title'] . '</h1>';
   } else if ($attributes['tag'] === 'h2') {
      echo '<h2>' . $attributes['title'] . '</h2>';
   } else if ($attributes['tag'] === 'h3') {
      echo '<h3>' . $attributes['title'] . '</h3>';
   } else if ($attributes['tag'] === 'h4') {
      echo '<h4>' . $attributes['title'] . '</h4>';
   } else if ($attributes['tag'] === 'h5') {
      echo '<h5>' . $attributes['title'] . '</h5>';
   } else if ($attributes['tag'] === 'h6') {
      echo '<h6>' . $attributes['title'] . '</h6>';
   } else {
      echo '<h1>' . $attributes['title'] . '</h1>';
   }
}
