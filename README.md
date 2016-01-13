# AnunaTheme

AnunaTheme is a WordPress starter-theme based on Sage, flavoured with Laravel Blade.

If you are looking for a complete production-ready theme, move along. AnunaTheme is a skeleton and contains a bare minimum of styles, and acts as a starting point for developers.

## Features

* [Sage](https://github.com/roots/sage)
* [Laravel Blade](http://laravel.com/docs/blade)
* [jQuery DOM Router](https://github.com/tormjens/jquery-dom-router)
* [Gulp](http://gulpjs.com)
* [Foundation for Sites 6](http://foundation.zurb.com/sites/docs/)
* Off Canvas Menu
* [CoffeeScript](http://coffeescript.org/)
* [Browserify](http://browserify.org/)
* [Bourbon](http://bourbon.io/)

## Requirements


| Prerequisite    | How to check         | How to install
| --------------- | -------------------- | ------------- |
| PHP   >= 5.4.x  | `php -v`             | [php.net](http://php.net/manual/en/install.php) |
| Node.js 0.12.x  | `node -v`            | [nodejs.org](http://nodejs.org/) |
| gulp  >= 3.8.10 | `gulp -v`            | `npm install -g gulp` |
| Bower >= 1.3.12 | `bower -v`           | `npm install -g bower` |
| Composer        | `composer --version` | [getcomposer.org](http://getcomposer.org) |

## Ajax Requests

In AnunaTheme AJAX is made really simple.

### PHP

On the server side, in your `lib/ajax.php`
```php
Ajax::create('my_cool_action', function($request) {
	echo $request->get('cool_parameter_from_request');
});
```

The `$request` object is an instance of `Symfony\Component\HttpFoundation\Request`. [Check out the documentation](http://symfony.com/doc/current/components/http_foundation/introduction.html#accessing-request-data) for usage instructions.

### CoffeeScript

On the client side, in your `assets/scripts/plugins/routes.coffee`:
```coffee
new Ajax 'my_cool_action', ( (response) ->
	console.log response
),
	cool_parameter_from_request: 'You are cool!'
```

The client side Ajax class accepts the following parameters:
* `action`: The action to send the request to.
* `callback`: A callback function.
* `data` (optional): An object of data
* `method` (optional): The method to use for the request. Defaults to `'GET'`

## 404 Page

We've incorporated a fun 404 page in the theme. When your visitors lands somewhere that doesn't exist they can play the ever popular [Snake game](https://github.com/ncpierson/Snake). The code behind it courtesy of [Nick Pierson](http://nickpierson.me), which developed the game while becoming more familiar with JavaScript. We've made some minor adjustments which allows us to modify colors and listen for events. See [the Github page for the plugin](https://github.com/tormjens/jquery-snake).

## DOM Based Routing

Sage has this thing they call DOM Based routing. In AnunaTheme you can route your stuff in the same way, except we are using this awesome jQuery-plugin called [jquery-dom-router](https://github.com/tormjens/jquery-dom-router).

We've set this up so you can add your dom routes in `assets/scripts/plugins/routes.coffee`.

## Blade

Blade is the template language of the excellent Laravel framework. Anunablade bases all of its templates on it, thanks to [Blade for Wordpress](https://github.com/tormjens/wp-blade).

All theme-files are "Bladed" and ready to be used with the Blade syntax. Since Blade sort of acts like it's own theme wrapper we've removed Sage's wrapper.

See for example the `index.php`-file for an example on how to extend upon layouts.

All template files are located in the `templates`-directory. The folder `cache` acts as a cache for WordPress template files (e.g. all template files that WordPress' template hierarchy searches for).

## Getting Started

1. Install Composer dependencies: `composer install`
2. Install NPM packages: `[sudo] npm install`
3. Install Bower dependencies: `bower install`
4. Run Gulp for the first time: `gulp watch` (For more options see the documentation)

## Documentation

Sage documentation is available at [https://roots.io/sage/docs/](https://roots.io/sage/docs/).

