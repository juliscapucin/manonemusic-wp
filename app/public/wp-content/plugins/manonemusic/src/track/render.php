<?php

/**
 * Renders the projects / releases block on the frontend.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 * @param WP_Block $block The block object.
 * 
 * // print_r($block);
 */

$postID = get_the_ID();
// print_r($attributes);
print_r(get_post_meta($postID, 'tracklist', true));


foreach ($attributes['tracklist'] as $track) {
   $title = $track['title'];
   $url = $track['url'];

   // Extract the src attribute value
   preg_match('/src="([^"]+)"/', $url, $match);
   $src_url = $match[1];

   // Parse the URL to get the query parameters
   $parsed_url = parse_url($src_url);
   parse_str($parsed_url['query'], $query_params);

   // Extract the track ID from the url parameter
   if (isset($query_params['url'])) {
      $track_url = $query_params['url'];
      preg_match('/tracks\/(\d+)/', $track_url, $track_match);
      $trackID = $track_match[1];
      // echo 'Track ID: ' . $track_id;
      $iframe = '<iframe class="sc-widget hidden -translate-y-1" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' . $trackID . '&color=%23EF4526&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&buying=false"></iframe>';
?>
      <span class="block mt-8"><?php esc_html_e($title) ?></span>
      <div class="relative w-full max-w-[500px] bg-faded-10 p-4 rounded-sm">
         <?php echo $iframe ?>
         <div class="absolute top-0 left-0 w-full h-full bg-primary pointer-events-none opacity-20 z-50"></div>
         <!-- <div class="absolute bg-secondary w-12 top-2 left-2 aspect-square rounded-full pointer-events-none z-50"></div> -->
         <button class="play-button">PLAY</button>
         <button class="pause-button hidden">PAUSE</button>
         <div class="w-full flex justify-between items-center">
            <span class="progress w-20">00:00:00</span>
            <div class="progress-bar h-1 flex-1 bg-faded-10 rounded-[1px]">
               <div class="progress-bar-fill h-1 bg-secondary rounded-[1px]"></div>
            </div>
            <span class="duration ml-4">00:00:00</span>
         </div>
      </div>
   <?php
   } else {
      echo 'Track ID not found.';
   }
   ?>

<?php
}
