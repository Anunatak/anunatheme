export default class Navigation  {
	constructor(body) {
		this.$body           = body
		this.$content        = this.$body.find('div[role="document"]')
		this.$trigger        = this.$body.find('[data-navigation-trigger]')
		this.$inner          = this.$body.find('[data-navigation-container]')
		this.bodyActiveClass = 'nav-open'
		this.animationDelay  = '500';
		this._bindEvents()
	}

	// Private Methods
	_bindEvents() {

		this.$trigger.on('click', () => {
			this.toggle();
		})

		this.$inner.find('li a').last().on('keydown', (e) => {
			if(!e.shiftKey) {
				e.preventDefault()
				this.close()
				this.$content.find('a').first().focus()
			}
		})

		this.$inner.find('li a').first().on('focus', (e) => {
			if(!e.shiftKey) {
				e.preventDefault()
				this.open()
			}
		})
	}

	_hasBodyClass() {
		return this.$body.hasClass(this.bodyActiveClass)
	}

	_addBodyClass() {
		if( !this._hasBodyClass() )
			this.$body.addClass(this.bodyActiveClass)
		this.$body.trigger('navigation.class.added');
	}
	_removeBodyClass() {
		if( this._hasBodyClass() )
			this.$body.removeClass(this.bodyActiveClass)
		this.$body.trigger('navigation.class.removed');
	}

	// Public Methods
	toggle() {
		if(!this._hasBodyClass())
			this.open()
		else
			this.close()
	}

	open() {
		this._addBodyClass()
		setTimeout(() => {
			this.$body.trigger('navigation.opened');
		}, this.animationDelay);

	}

	close() {
		this._removeBodyClass()
		setTimeout(() => {
			this.$body.trigger('navigation.closed');
		}, this.animationDelay);
	}

	// methods
}
