export default class Ajax {

	/**
	 * Create a new Ajax handler
	 * @param  {String} action   The action to listen for
	 * @param  {Function} callback The function to run when success
	 * @param  {Object} data     Data to pass to the action
	 * @param  {String} method   Method to use for the request
	 * @return {Void}
	*/
	constructor(action, callback, data, method) {
		this.action   = action
		this.callback = callback
		this.data     = data
		this.method   = method
		this.setup()
	}

	/**
	 * Set up the ajax request
	*/
	setup() {
		var data = this.data || {}
		data = jQuery.extend(data, {
			action: this.action
		})
		jQ.ajax({
			url: App.ajax,
			type: this.method || 'GET',
			data: data,
			success: this.callback,
			error: (err) => {
				console.log(err)
			}
		});
	}

}
