<?php

namespace AnunaTheme\Controllers;

use Tormorten\WPBlade\Controller;

class HomeController extends Controller {

	protected $views = [
		'index', 'page'
	];

	public function process()
	{
		return ['home' => 'that', 'page' => 'this'];
	}

}
