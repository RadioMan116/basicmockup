(function() {
	if (isProduction) return;
	var form = function() {
		$('[data-form-label]').each(function() {
			if (this.value) {
				$(this).addClass('form__input_full');
			}
			$(this).blur(function() {
				if (this.value) {
					console.log(this.value)
					$(this).addClass('form__input_full');
					checkForm();
				} else {
					$(this).removeClass('form__input_full');
				}
			});
		});
		var phones = document.querySelectorAll('[type=tel]');
		[].forEach.call(phones, (node) => {
			Inputmask('+7(999) 999-99-99', {
				clearIncomplete: true
				// numericInput: true
			}).mask(node)
		});
	}
	window.form = form;
	form();
	mutationObserver('.popup__change', () => {
		form();
	});
	// $('[type=tel]').inputmask('+7 (999) 999-99-99');
})();

function mutationObserver(selectors, cb) {
	[...document.querySelectorAll(selectors)].forEach((element) => {
		var observer = new MutationObserver(function(mutations) {
			cb();
		});
		var config = {
			childList: true,
		};
		observer.observe(element, config);
		console.log(observer.observe(element, config))
	});
}

function checkForm() {
	let check = document.querySelector('.popup-user')
	if (check) {
		if ([...document.querySelectorAll('[data-form-label]')].every(elem => elem.classList.contains("form__input_full"))) {
			check.querySelector('[type="submit"]').removeAttribute('disabled')
		}
	}
}
