<?php

namespace AnunaTheme\Silk;

if ( class_exists( '\Silk\PostType\Builder' ) ) {
	include get_template_directory() . '/silk/post-type.php';
}

if ( class_exists( '\Silk\Taxonomy\Builder' ) ) {
	include get_template_directory() . '/silk/taxonomy.php';
}

if ( class_exists( '\Silk\Event\Hook' ) ) {
	include get_template_directory() . '/silk/hook.php';
}
