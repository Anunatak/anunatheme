jQ = jQuery

class Menu
	$body: jQ('body')
	$content: jQ('div[role="document"]')
	$trigger: jQ('[data-navigation-trigger]')
	$inner: jQ('[data-navigation-container]')
	bodyActiveClass: 'nav-open'

	toggle: ->
		if !this._hasBodyClass()
			this.open()
		else
			this.close()

	open: ->
		this._addBodyClass()

	close: ->
		this._removeBodyClass()

	_hasBodyClass: ->
		return this.$body.hasClass(this.bodyActiveClass)

	_addBodyClass: ->
		if !this._hasBodyClass()
			this.$body.addClass(this.bodyActiveClass)

	_removeBodyClass: ->
		if this._hasBodyClass()
			this.$body.removeClass(this.bodyActiveClass)

	bind: ->
		self = this
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

module.exports = Menu
