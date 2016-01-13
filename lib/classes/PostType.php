<?php

namespace AnunaTheme\Classes;

class PostType extends \CPT {
	/**
	 * Constructor
	 *
	 * Register a custom post type.
	 *
	 * @param mixed $post_type_names The name(s) of the post type, accepts (post type name, slug, plural, singular).
	 * @param array $options User submitted options.
	*/
	function __construct( $post_type_names, $options = array() ) {
		$this->set_textdomain( ANUNATHEME_TEXTDOMAIN );
		parent::__construct($post_type_names, $options);
	}
}
