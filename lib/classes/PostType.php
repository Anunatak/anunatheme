<?php

namespace AnunaTheme\Classes;

class PostType {
	/**
	 * Constructor
	 *
	 * Register a custom post type.
	 *
	 * @param mixed   $post_type_names The name(s) of the post type, accepts (post type name, slug, plural, singular).
	 * @param array   $options         User submitted options.
	 */
	public function add( $post_type_names, $options = array() ) {
		$cpt = new \CPT($post_type_names, $options );
		$cpt->set_textdomain( ANUNATHEME_TEXTDOMAIN );
		return $cpt;
	}

	/**
	 * Register a custom post type statically.
	 *
	 * @param mixed   $post_type_names The name(s) of the post type, accepts (post type name, slug, plural, singular).
	 * @param array   $options         User submitted options.
	 */
	public static function make( $post_type_names, $options = array() ) {
		return (new static)->add( $post_type_names, $options );
	}
}
