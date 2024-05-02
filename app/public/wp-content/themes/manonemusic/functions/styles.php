<?php

function manonemusic_block_styles()
{
   register_block_style(
      'core/columns',
      array(
         'name'         => 'default',
         'label'        => 'Default',
         'isDefault'    => true,
      ),
   );
   register_block_style('core/image', array(
      'name'         => 'hand-drawn',
      'label'        => __('Hand Drawn', 'themeslug'),
      'inline_style' => '.wp-block-image.is-style-hand-drawn img {
			border: 2px solid currentColor;
			overflow: hidden;
			box-shadow: 0 4px  10px 0 rgba( 0, 0, 0, 0.3 );
			border-radius: 255px 15px 225px 15px/15px 225px 15px 255px !important;
		}'
   ));
}

add_action('init', 'manonemusic_block_styles');
