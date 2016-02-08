<?php

namespace AnunaTheme\Classes;

class PostType extends \CPT {
	/**
	 * Constructor
	 *
	 * Register a custom post type.
	 *
	 * @param mixed   $post_type_names The name(s) of the post type, accepts (post type name, slug, plural, singular).
	 * @param array   $options         User submitted options.
	 */
	public function __construct( $post_type_names, $options = array() ) {
		$this->set_textdomain( ANUNATHEME_TEXTDOMAIN );
		parent::__construct( $post_type_names, $options );
	}

	/**
	 * Register a custom post type statically.
	 *
	 * @param mixed   $post_type_names The name(s) of the post type, accepts (post type name, slug, plural, singular).
	 * @param array   $options         User submitted options.
	 */
	public static function make( $post_type_names, $options = array() ) {
		return new static( $post_type_names, $options );
	}
}
