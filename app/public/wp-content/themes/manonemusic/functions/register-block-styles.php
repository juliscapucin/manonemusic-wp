<?php

function manonemusic_block_styles()
{
   register_block_style(
      'core/group',
      array(
         'name'         => 'group-full',
         'label'        => 'Group Full',
      ),
   );
   register_block_style(
      'core/group',
      array(
         'name'         => 'group-section',
         'label'        => 'Group Section',
      ),
   );
   register_block_style(
      'core/columns',
      array(
         'name'         => 'columns-full',
         'label'        => 'Columns Full',
      ),
   );
   register_block_style(
      'core/column',
      array(
         'name'         => 'column-full',
         'label'        => 'Column Full',
      ),
   );
   register_block_style(
      'core/heading',
      array(
         'name'         => 'logo-huge',
         'label'        => 'Logo Huge',
      ),
   );
   register_block_style('core/button', array(
      'name'         => 'button-manonemusic',
      'label'        => __('Theme Button', 'themeslug'),
      'isDefault'    => true,
   ));
}

add_action('init', 'manonemusic_block_styles');
