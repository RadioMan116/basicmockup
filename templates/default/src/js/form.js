(function() {

	var each = function(arr, callback) {
		Array.prototype.forEach.call(arr, function(node, index) {
			callback.call(node, index)
		});
	}

	var inputs = document.querySelectorAll('[data-form-label]');

	each(inputs, function() {

		this.addEventListener('focusout', function() {
			if(this.value) {
				this.classList.add('form__input_full');
			} else {
				this.classList.remove('form__input_full');
			}
		});

	});

})();
