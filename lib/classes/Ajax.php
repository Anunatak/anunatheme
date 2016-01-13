<?php

namespace AnunaTheme\Classes;

use Symfony\Component\HttpFoundation\Request;

/**
 * Class to perform WordPress ajax requests
 */
class Ajax {
	/**
	 * Holds the action
	 * @var string
	 */
	protected $action = null;

	/**
	 * Holds the callback
	 * @var null
	 */
	protected $callback = null;

	/**
	 * Set up the ajax interface
	 * @param string   $action   Name of your custom action
	 * @param \Closure $callback A valid closure to use
	 */
	public function __construct($action, \Closure $callback)
	{
		$this->action = $action;
		$this->callback = $callback;

		$this->actions();
	}

	/**
	 * Set up the ajax interface statically
	 * @param string   $action   Name of your custom action
	 * @param \Closure $callback A valid closure to use
	 */
	public function create($action, \Closure $callback) {
		return new static($action, $callback);
	}

	/**
	 * Set up all actions
	 * @return void
	 */
	protected function actions()
	{
		add_action('wp_ajax_'. $this->action, array($this, 'handle'));
		add_action('wp_ajax_nopriv_'. $this->action, array($this, 'handle'));
	}

	/**
	 * Handle the closure
	 * @return void
	 */
	public function handle()
	{
		// create the request object
		$request = Request::createFromGlobals();

		// die and call the callback and pass on the request object
		die( call_user_func($this->callback, $request) );
	}
}
