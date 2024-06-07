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

// print_r($block);
?>

<div class="mt-16 pr-16">
   <?php
   // $tracklist = get_post_meta(get_the_ID(), 'repeatable_fields', true);
   // $tracklist = get_field('repeatable_fields');
   $tracklist = $attributes['tracklist'];
   $trackCount = count($tracklist);

   foreach ($tracklist as $index => $track) {
      $name = $track['name'];
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
         $iframe = '<iframe class="sc-widget hidden scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' . $trackID . '&color=%23EF4526&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&buying=false"></iframe>';

         // Determine if this is the last item in the array
         $isLastItem = ($index === $trackCount - 1);
         $additionalClass = $isLastItem ? ' border-b' : '';

   ?>
         <div class="relative w-full py-4 px-1 rounded-sm border-t border-faded-20 font-primary text-secondary <?php echo $additionalClass; ?>">
            <?php echo $iframe ?>

            <div class="flex gap-4 w-full items-center mb-4">
               <button class="play-button">
                  <div class='w-16 h-16 flex items-center justify-center'>
                     <svg width='59' height='68' viewBox='0 0 59 68' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M0.918335 1.06399L57.3203 33.6277L0.918332 66.1914L0.918335 1.06399Z' stroke='currentColor' stroke-opacity='0.3' />
                     </svg>
                  </div>
               </button>
               <button class="pause-button hidden">
                  <div class='w-16 h-16 flex justify-center items-center'>
                     <svg width='44' height='62' viewBox='0 0 44 62' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <rect x='1.28516' y='0.67041' width='16.0508' height='60.4668' stroke='currentColor' />
                        <rect x='27.2695' y='0.67041' width='16.0508' height='60.4668' stroke='currentColor' />
                     </svg>
                  </div>
               </button>
               <span><?php esc_html_e($name) ?></span>
            </div>

            <div class="w-full flex justify-between items-center">
               <span class="progress w-20">00:00:00</span>
               <button class="progress-bar h-1 flex-1 bg-faded-10 rounded-[1px]">
                  <div class="progress-bar-fill h-1 bg-secondary rounded-[1px]"></div>
               </button>
               <span class="duration ml-4">00:00:00</span>
            </div>
         </div>
      <?php
      } else {
         echo 'Track ID not found.';
      }
      ?>

   <?php
   } ?>
</div>