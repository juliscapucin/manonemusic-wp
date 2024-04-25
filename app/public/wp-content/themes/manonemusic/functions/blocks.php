<?php

class JSXBlock
{
   private $blockName;
   function __construct($blockName)
   {
      $this->blockName = $blockName;
      add_action('init', [$this, 'onInit']);
   }

   function onInit()
   {
      wp_register_script($this->blockName, get_stylesheet_directory_uri() . "/build/{$this->blockName}.js", array('wp-blocks', 'wp-editor'));
      register_block_type("ourblocktheme/{$this->blockName}", array(
         'editor_script' => $this->blockName
      ));
   }
}

new JSXBlock('home');
new JSXBlock('customheading');
