<?php

// Require function modules
// Path to the theme directory
// $theme_dir = get_template_directory();
$theme_dir = get_theme_file_path();
$stylesheet_dir = get_stylesheet_directory();

require_once $theme_dir . '/includes/files.php';
require_once $theme_dir . '/includes/features.php';
require_once $theme_dir . '/includes/custom-queries.php';
require_once $theme_dir . '/includes/repeatable-custom-fields.php';
require_once $theme_dir . '/includes/modular-custom-fields.php';
require_once $theme_dir . '/includes/duplicate-post.php';

// Require components
require_once $theme_dir . '/components/releases.php';
require_once $theme_dir . '/components/projects.php';

// Require common functions
// require_once $theme_dir . '/includes/common.php';

// Require custom core block styles
require_once $theme_dir . '/includes/register-block-styles.php';

// Require GSAP files
require_once $theme_dir . '/includes/gsap-enqueue.php';
