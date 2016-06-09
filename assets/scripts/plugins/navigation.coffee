# Require all modules
$ = require 'jquery'

# Export the module
module.exports =
	body: 'body' # Body element
	content: 'div[role="document"]' # Site content element
	trigger: '[data-navigation-trigger]' # Menu trigger element
	inner: '[data-navigation-container]' # Inner navigation element
	bodyActiveClass: 'nav-open' # Class to add when menu is open

	# Toggle navigation
	toggle: ->
		if !this._hasBodyClass()
			this.open()
		else
			this.close()

	# Open navigation
	open: ->
		this._addBodyClass()
		this.$body.trigger('navigation.opened');

	# Close navigation
	close: ->
		this._removeBodyClass()
		this.$body.trigger('navigation.closed');

	# Check if the body has the active class
	_hasBodyClass: ->
		return this.$body.hasClass(this.bodyActiveClass)

	# Add class to the body
	_addBodyClass: ->
		if !this._hasBodyClass()
			this.$body.addClass(this.bodyActiveClass)
		this.$body.trigger('navigation.class.added');

	# Remove class from the body
	_removeBodyClass: ->
		if this._hasBodyClass()
			this.$body.removeClass(this.bodyActiveClass)
		this.$body.trigger('navigation.class.removed');

	cacheElements: ->
		this.$trigger = $(this.trigger)
		this.$inner   = $(this.inner)
		this.$content = $(this.content)
		this.$body    = $(this.body)
	# Bind DOM
	bind: ->
		self = this
		self.cacheElements()
		self.$trigger.on 'click', ->
			self.toggle()

		self.$inner.find('li a').last().on 'keydown', (e) ->
			if !e.shiftKey
				e.preventDefault()
				self.close()
				self.$content.find('a').first().focus()

		self.$inner.find('li a').first().on 'focus', (e) ->
			if !e.shiftKey
				e.preventDefault()
				self.open()

		self.$body.trigger('navigation.binded');
