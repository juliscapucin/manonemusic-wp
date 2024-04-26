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

      wp_register_script($this->blockName, get_stylesheet_directory_uri() . "/build/blocks/{$this->blockName}/index.js", array('wp-blocks', 'wp-editor', 'wp-element'), filemtime(get_stylesheet_directory() . "/build/blocks/{$this->blockName}/index.js"), true);
      register_block_type(__DIR__ . "/build/blocks/{$this->blockName}/block.json");
   }
}

new JSXBlock('custombutton');
