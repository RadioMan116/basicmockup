var nouisliderData = document.querySelectorAll('[data-nouislider]');

$(nouisliderData).each(function() {

	if($(this).hasClass('noUi-target')) {
		return false;
	}

	// import('nouislider').then((noUiSlider) => {
		var _this = this;

		var valueStart = parseInt(this.getAttribute('data-value-start'));
		var valueEnd = parseInt(this.getAttribute('data-value-end'));
		var min = parseInt(this.getAttribute('data-min'));
		var max = parseInt(this.getAttribute('data-max'));

		var inputs = $(this).prev().find('.js-filter-slider__input');
// debugger;
		// $(inputs).inputmask({
		// 	regex: "[0-9]*",
		// 	isComplete: function(buffer, opts) {
		// 		return new RegExp(opts.regex).test(buffer.join(''));
		// 	}
		// });

		$(inputs).each(function(index) {
			$(this).on('change blur', function() {
				if(index == 0) {

					if(parseInt(this.value) >= parseInt(inputs[1].value)) {
						this.value = inputs[1].value;
					}
					if(parseInt(this.value) <= 0) {
						this.value = 0;
					}

					_this.noUiSlider.set([this.value, null]);

				} else {
					if(parseInt(this.value) <= parseInt(inputs[0].value)) {
						this.value = inputs[0].value;
					}
					if(parseInt(this.value) > max) {
						this.value = max;
					}

					_this.noUiSlider.set([null, this.value]);
				}
			})
		})

		noUiSlider.create(this, {
			start: [
				valueStart,
				valueEnd
			],
			connect: true,
			range: {
				'min': min,
				'max': max
			}
		});

		this.noUiSlider.on('slide', function(values) {
			inputs[0].value = Math.round(values[0]);
			inputs[1].value = Math.round(values[1]);
		});
	// })

});
