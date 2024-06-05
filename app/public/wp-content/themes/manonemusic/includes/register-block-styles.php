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
      'core/group',
      array(
         'name'         => 'max-width',
         'label'        => 'Max Width',
      ),
   );
   register_block_style(
      'core/group',
      array(
         'name'         => 'group-page-container',
         'label'        => 'Page Container',
      ),
   );
   register_block_style(
      'core/image',
      array(
         'name'         => 'image-absolute',
         'label'        => 'Absolute',
      ),
   );
   register_block_style(
      'core/columns',
      array(
         'name'         => 'max-width',
         'label'        => 'Max Width',
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
         'name'         => 'heading-display',
         'label'        => 'Display',
      ),
   );
   register_block_style(
      'core/heading',
      array(
         'name'         => 'heading-headline',
         'label'        => 'Headline',
      ),
   );
   register_block_style(
      'core/post-title',
      array(
         'name'         => 'heading-headline',
         'label'        => 'Headline',
      ),
   );
   register_block_style(
      'core/heading',
      array(
         'name'         => 'heading-title',
         'label'        => 'Title',
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
      'core/post-featured-image',
      array(
         'name'         => 'featured-image-square-mr',
         'label'        => 'Square Margin Right',
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
