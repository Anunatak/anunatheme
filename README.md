# AnunaTheme

AnunaTheme is a WordPress starter-theme based on Sage, flavoured with Laravel Blade.

## Features

* [Sage](https://github.com/roots/sage)
* [Laravel Blade](http://laravel.com/docs/blade)
* [jQuery DOM Router](https://github.com/tormjens/jquery-dom-router)
* [Gulp](http://gulpjs.com)
* [Foundation for Sites 6](http://foundation.zurb.com/sites/docs/)
* Off Canvas Menu
* [Bourbon](http://bourbon.io/)

## Requirements


| Prerequisite    | How to check         | How to install
| --------------- | -------------------- | ------------- |
| PHP   >= 5.4.x  | `php -v`             | [php.net](http://php.net/manual/en/install.php) |
| Node.js 0.12.x  | `node -v`            | [nodejs.org](http://nodejs.org/) |
| gulp  >= 3.8.10 | `gulp -v`            | `npm install -g gulp` |
| Bower >= 1.3.12 | `bower -v`           | `npm install -g bower` |
| Composer        | `composer --version` | [getcomposer.org](http://getcomposer.org) |


## DOM Based Router

Sage has this thing they call DOM Based routing. In Anunastart you can route your stuff in the same way, except we are using this awesome jQuery-plugin called [jquery-dom-router](https://github.com/tormjens/jquery-dom-router).

It's kind of exactly the same, only it responds to live changes of classes on your `<body>`-tag and the syntax is way sexier. Check it out!

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

