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
         'name'         => 'horizontal-scroll',
         'label'        => 'Horizontal Scroll',
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
         'label'        => 'Full',
      ),
   );
   register_block_style(
      'core/columns',
      array(
         'name'         => 'columns-full-bottom',
         'label'        => 'Full Bottom',
      ),
   );
   register_block_style(
      'core/column',
      array(
         'name'         => 'column-full',
         'label'        => 'Full Height',
      ),
   );
   register_block_style(
      'core/column',
      array(
         'name'         => 'column-padding',
         'label'        => 'Padding',
      ),
   );
   register_block_style(
      'core/column',
      array(
         'name'         => 'column-padding-align-bottom',
         'label'        => 'Padding Align Bottom',
      ),
   );
   register_block_style(
      'core/group',
      array(
         'name'         => 'stack-scroll',
         'label'        => 'Stack Scroll',
      ),
   );
   register_block_style(
      'core/heading',
      array(
         'name'         => 'logo-huge',
         'label'        => 'Logo Huge',
      ),
   );
   register_block_style(
      'core/heading',
      array(
         'name'         => 'heading-section',
         'label'        => 'Section',
      ),
   );
   register_block_style(
      'core/image',
      array(
         'name'         => 'image-square',
         'label'        => 'Image Square',
      ),
   );
   register_block_style(
      'core/paragraph',
      array(
         'name'         => 'indent-left',
         'label'        => 'Indent Left',
      ),
   );
   register_block_style(
      'core/paragraph',
      array(
         'name'         => 'indent-right',
         'label'        => 'Indent Right',
      ),
   );
}

add_action('init', 'manonemusic_block_styles');
