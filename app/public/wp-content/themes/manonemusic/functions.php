<?php

// Require function modules
// Path to the theme directory
$theme_dir = get_template_directory();
$stylesheet_dir = get_stylesheet_directory();

require_once $theme_dir . '/functions/files.php';
require_once $theme_dir . '/functions/features.php';
require_once $theme_dir . '/functions/custom-queries.php';
require_once $theme_dir . '/functions/repeatable-custom-types.php';

// Require components
require_once $theme_dir . '/components/releases.php';
require_once $theme_dir . '/components/projects.php';
