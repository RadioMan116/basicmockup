(function () {
	if (isProduction) return;
	var form = function () {
		$("[data-form-label]").each(function () {
			if (this.value) {
				$(this).addClass("form__input_full");
			}
			$(this).blur(function () {
				if (this.value) {
					$(this).addClass("form__input_full");
				} else {
					$(this).removeClass("form__input_full");

				}
				checkForm();
			});
		});
		var phones = document.querySelectorAll("[type=tel]");
		[].forEach.call(phones, (node) => {
			Inputmask("+7(999) 999-99-99", {
				clearIncomplete: true,
				// numericInput: true
				oncomplete: function () {
					$(this).removeClass("BadPols");
					// $(".landing-call__submit").removeAttr("disabled");
				},
				onincomplete: function () {
					$(this).addClass("BadPols");
					// $(".landing-call__submit").attr("disabled", "disabled");
				},

			}).mask(node);


		});

		var email = document.querySelectorAll("[type=\"email\"]");
		[].forEach.call(email, (node) => {
			node.setAttribute("type", "text");
			Inputmask("email", {
				oncomplete: function () {
					$(this).removeClass("BadPols");
				},
				onincomplete: function () {
					$(this).addClass("BadPols");
				},
			}).mask(node);
		});


	};
	window.form = form;
	form();
	mutationObserver(".popup__change", () => {
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
			childList: true,
		};
		observer.observe(element, config);
	});
}

function checkForm() {
	let check = document.querySelector(".popup-user");
	if (check) {
		let inputCheck = [...document.querySelectorAll("[data-form-label]")];

		if (inputCheck.every(elem => elem.classList.contains("form__input_full")) && !inputCheck.some(elem => elem.classList.contains("BadPols"))) {
			check.querySelector("[type=\"submit\"]").removeAttribute("disabled");
		} else {
			check.querySelector("[type=\"submit\"]").setAttribute("disabled", "disabled");
		}
	}
}
