(function () {

	if (isProduction)
		return;

	var form = function () {
		$('[data-form-label]').each(function () {

			if (this.value) {
				$(this).addClass('form__input_full');
			}

			$(this).blur(function () {
				if (this.value) {
					console.log(this.value)
					$(this).addClass('form__input_full');
				} else {
					$(this).removeClass('form__input_full');
				}
			});

		});

		var phones = document.querySelectorAll('[type=tel]');

		[].forEach.call(phones, (node) => {
			Inputmask('+7(999) 999-9999', {
				clearIncomplete: true
			}).mask(node)
		});

	}

	form();

	mutationObserver('.popup__change', () => {
		form();
	});

	// $('[type=tel]').inputmask('+7 (999) 999-99-99');

})();

function mutationObserver(selectors, cb) {

	[...document.querySelectorAll(selectors)].forEach((element) => {

		var observer = new MutationObserver(function (mutations) {
			cb();
		});

		var config = {
			childList: true
		};

		observer.observe(element, config);

	});

}
