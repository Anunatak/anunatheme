<?php namespace AnunaTheme\Classes;

class Loader {

	public function __construct()
	{
		$this->loadEnqueue();
		$this->loadPostType();
	}

	public function loadEnqueue()
	{
		$enqueue = new Enqueue;
		@require_once get_template_directory() . '/lib/loaders/enqueue.php';
	}

	protected function loadPostType()
	{
		$cpt = new PostType;
		@require_once get_template_directory() . '/lib/loaders/postType.php';
	}

}
