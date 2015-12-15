/**
 * Off Canvas Navigation
 * All animations are done via CSS styling located in "assets/scss/components/_navigation.scss"
 */
(function($) {

	/**
	 * Variables
	 */
	var $body 					= $('body'),
		$content 				= $('div[role="document"]'),
		$trigger 				= $('[data-navigation-trigger]'),
		$inner 					= $('[data-navigation-container]'),
		bodyActiveClass			= 'nav-open';

	/**
	 * Menu object
	 */
	var menu = {
		toggle: function() {
			if(!this._hasBodyClass()) {
				this.open();
			}
			else {
				this.close();
			}
		},
		open: function() {
			this._addBodyClass();
		},
		close: function() {
			this._removeBodyClass();
			setTimeout(function() {
				console.log('klekk');
				$('html').trigger('click');
			}, 1000);
		},
		_hasBodyClass: function() {
			return $body.hasClass(bodyActiveClass);
		},
		_addBodyClass: function() {
			if(!this._hasBodyClass()) {
				$body.addClass(bodyActiveClass);
			}
		},
		_removeBodyClass: function() {
			if(this._hasBodyClass()) {
				$body.removeClass(bodyActiveClass);
			}
		},
	};

	/**
	 * What happens when the trigger is clicked
	 */
	$trigger.on('click', function() {
		menu.toggle();
	});

	/**
	 * When someone leaves the last item in the menu,
	 * we'll collapse the menu
	 */
	$inner.find('li a').last().on('keydown', function(e) {
		if (!e.shiftKey) {
			e.preventDefault();
			menu.close();
			$content.find('a').first().focus();
		}
	});

	/**
	 * When the user arrives at the first item (by focus)
	 * we'll expand the menu
	 */
	$inner.find('li a').first().on('focus', function(e) {
		if (!e.shiftKey) {
			e.preventDefault();
			menu.open();
		}
	});

})(jQuery); // Fully reference jQuery after this point.
