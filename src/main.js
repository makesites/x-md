(function() {
	// Creates an object based in the HTML Element prototype
	var el = Object.create(HTMLElement.prototype);
	var view;

	// Fires when an instance of the element is created
	el.createdCallback = function() {

		// gather options
		var options = {};
		// ...
		options.el = el;
		// instantiate view
		var compiler = (new Showdown.converter()).makeHtml;
		//view = compiler( el.content );

	};

	// Fires when an instance was inserted into the document
	el.attachedCallback = function() {};

	// Fires when an instance was removed from the document
	el.detachedCallback = function() {
		view.destroy();
	};

	// Fires when an attribute was added, removed, or updated
	el.attributeChangedCallback = function(attr, oldVal, newVal) {};

	document.registerElement('x-md', {
		prototype: el
	});
}());
