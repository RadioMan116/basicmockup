var InitFilter = function () {

	if (isProduction && typeof BXP.loadMore != undefined) {
		if (BXP.loadMore == 'Y')
			return false;
	}

	var $filter = document.querySelector('#js-filter');
	var $filterCheckboxForChangeForm;
	var $filterForm;
	var $filterHiddenBlock;
	var $filterButtonMore;
	var $filterBrands;
	var $filterBrandsBtnShow;
	var $filterSlider;
	var tooltip;
	var isMobile = window.matchMedia('(max-width: 767px)').matches;

	var createTooltip = function () {

		let tooltip = document.createElement('div');
		tooltip.classList.add('filter__tooltip');
		tooltip.setAttribute('role', 'tooltip');
		document.body.prepend(tooltip);

		let tooltipClose = document.createElement('div');
		tooltipClose.classList.add('filter__tooltipClose');
		tooltip.append(tooltipClose);

		let tooltipButton = document.createElement('span');
		tooltipButton.innerHTML = 'Показать&nbsp;';
		tooltipButton.classList.add('filter__tooltipButton');
		tooltip.append(tooltipButton);

		let tooltipChange = document.createElement('span');
		tooltip.append(tooltipChange);

		let arrow = document.createElement('div');
		arrow.classList.add('tooltip-arrow');
		arrow.setAttribute('data-popper-arrow', true);
		tooltip.append(arrow);

		tooltipClose.addEventListener('click', () => {
			tooltip.classList.remove('filter__tooltip_show');
		});

		return {
			getTooltip() {
				return tooltip;
			},
			getButton() {
				return tooltipButton;
			},
			getArrow() {
				return arrow;
			},
			show() {
				tooltip.classList.add('filter__tooltip_show');
			},
			hide() {
				tooltip.classList.remove('filter__tooltip_show');
			},
			setText(text) {
				tooltipChange.innerHTML = text;
			}
		}
	}

	tooltip = createTooltip();

	var $filterPopups;

	if (!$filter) {
		return false;
	}

	$filterForm = $filter.querySelector('form');
	$filterCheckboxForChangeForm = $filter.querySelector('#js-filter-hidden');
	$filterHiddenBlock = $filter.querySelector('[data-filter-hidden]');
	$filterButtonMore = $filter.querySelector('[data-filter-more]');
	$filterBrands = $filter.querySelector('[data-filter-brands]');
	$filterBrandsBtnShow = $filter.querySelector('[data-filter-brands-btn]');
	$filterTooltips = $filter.querySelectorAll('[data-tooltip]');

	if ($filterButtonMore) {
		$filterButtonMore.addEventListener('click', function () {
			this.classList.toggle('active');
			$filterHiddenBlock.classList.toggle('active');

			if (!this.classList.contains('active') && isMobile) {
				setTimeout(() => {
					window.scrollTo({
						top: $filter.offsetTop,
						behavior: "smooth"
					});
				}, 500);
			}

			let $elementFound = $filter.querySelector('[data-showResult-tooltip]');
			if ($elementFound) {
				virtualElement.getBoundingClientRect = generateGetBoundingClientRect($elementFound.getBoundingClientRect());
				placementPopper = 'top';
				instancePopper.scheduleUpdate()
				instancePopper.update();
			}
		});
	}

	// Добавляем класс для цветов

	if ($filterBrandsBtnShow) {
		$filterBrandsBtnShow.addEventListener('click', function () {
			$filterBrands.classList.toggle('active');
		});
	}

	// вызов попапов
	$filterPopups = [...document.querySelectorAll('.enable[data-filter-popup]')];
	$filterPopups.forEach(function (node) {

		var $filterPopupsCall = node.querySelectorAll('[data-filter-popup-call]');
		var $filterPopupsClose = node.querySelector('[data-filter-popup-close]');
		var $filterPopupsValue = node.querySelector('[data-filter-value]');
		var $inputsCheckbox;
		var emptyTitle = $(node).parents('[data-empty-title]').attr('data-empty-title');

		node.addEventListener('click', function (e) {
			e.stopPropagation();
		});

		$filterPopupsCall.forEach(function (nodeCall) {
			nodeCall.addEventListener('click', function (e) {
				e.stopPropagation();
				$filterPopups.forEach($node => {
					if ($node !== node) {
						$node.classList.remove('active');
						tooltip.hide();
					}
				})
				node.classList.toggle('active');
				if (node.classList.contains('active')) {
					virtualElement.getBoundingClientRect = generateGetBoundingClientRect(node.getBoundingClientRect());
					placementPopper = 'top';
					instancePopper.scheduleUpdate()
					instancePopper.update();
				} else {
					tooltip.hide();
				}
			});
		});

		$filterPopupsClose.addEventListener('click', function (e) {
			e.stopPropagation();
			node.classList.remove('active');
			tooltip.hide();
		});

		if ($filterPopupsValue) {
			$inputsCheckbox = [...node.querySelectorAll('input[type=checkbox]')];
			let _filterPopupsProperty;
			let filterPopupsProperty = '';
			_filterPopupsProperty = $filterPopupsValue.getAttribute('data-property');
			filterPopupsProperty = _filterPopupsProperty ? ' ' + _filterPopupsProperty : '';

			if ($inputsCheckbox.length) {
				$inputsCheckbox.forEach((input) => {
					let checkArray = [];
					$inputsCheckbox.forEach((item) => {
						if (item.checked) {
							checkArray.push(`<span>${item.getAttribute('data-text')}</span>`);
						}
					});

					$filterPopupsValue.innerHTML = checkArray.length ? checkArray.join(', ') + filterPopupsProperty : emptyTitle;
					input.addEventListener('change', function () {
						let checkArray = [];
						$inputsCheckbox.forEach((item) => {
							if (item.checked) {
								checkArray.push(`<span>${item.getAttribute('data-text')}</span>`);
							}
						});

						$filterPopupsValue.innerHTML = checkArray.length ? checkArray.join(', ') + filterPopupsProperty : emptyTitle;

					});
				});
			}
		}

	});

	[...$filterTooltips].forEach($node => {
		$node.addEventListener('click', () => {
			tooltip.hide();
		});
	});

	const Popper = require('popper.js');

	function generateGetBoundingClientRect({
		width = 0,
		height = 0,
		top = 0,
		right = 0,
		bottom = 0,
		left = 0
	}) {
		return () => ({
			width: parseInt(width),
			height: parseInt(height),
			top: parseInt(top),
			right: parseInt(right),
			bottom: parseInt(bottom),
			left: parseInt(left)
		});
	}

	const virtualElement = {
		getBoundingClientRect: generateGetBoundingClientRect({}),
	};

	let placementPopper = isMobile ? 'top' : 'right';

	const instancePopper = new Popper.default(virtualElement, tooltip.getTooltip(), {
		placement: isMobile ? 'top' : 'right',
		modifiers: {
			offset: {
				offset: '0, 10px'
			}
		},
		eventsEnabled: false,
		onUpdate() {

			this.placement = placementPopper;

		}
	});

	const $formElements = $filterForm.elements;

	Array.from($formElements).forEach($element => {
		if ($element.type != 'submit' && $element.type != 'reset' && $element.id != 'filter-brands-switcher') {
			['change', 'blur'].forEach(event => {
				$element.addEventListener(event, () => {
					virtualElement.getBoundingClientRect = generateGetBoundingClientRect($element.parentNode.getBoundingClientRect());
					if (!isMobile) {
						if ($element.type == 'number') {
							placementPopper = 'top';
						} else {
							placementPopper = 'right';
						}
						instancePopper.scheduleUpdate();
					}
					instancePopper.update();
				});
			});
		}
	});

	$filterSlider = [...$filter.querySelectorAll('[data-filter-slider]')];

	// инициализация слайдеров
	import('nouislider').then((noUiSlider) => {

		$filterSlider.forEach(function (node) {

			var $noUiSlider = node.querySelector('[data-nouislider]');
			var emptyTitle = $(node).parents('[data-empty-title]').attr('data-empty-title');
			var $priceParentElement = node.querySelector('[data-filter-setPrice]');

			if (node.classList.contains('noUi-target')) {
				return false;
			}

			node.addEventListener('click', function (e) {
				e.stopPropagation();
			});

			var $inputs = [...node.querySelectorAll('input')];
			var $result = node.querySelector('[data-filter-value]');
			var valStart = parseInt($noUiSlider.getAttribute('data-value-start'));
			var valEnd = parseInt($noUiSlider.getAttribute('data-value-end'));
			var resStart = valStart;
			var resEnd = valEnd;
			var min = parseInt($noUiSlider.getAttribute('data-min'));
			var max = parseInt($noUiSlider.getAttribute('data-max'));
			var property = '';
			var isEqualLVal = min == valStart ? true : false;
			var isEqualRVal = max == valEnd ? true : false;

			if ($result) {
				property = $result.getAttribute('data-property');
				$result.innerHTML = isEqualLVal && isEqualRVal ? emptyTitle : `<b>${valStart} - ${resEnd} ${property}</b>`
			}

			$inputs.forEach(function (input, index) {

				input.addEventListener('blur', function () {

					if (index == 0) {

						if (parseInt(this.value) >= parseInt($inputs[1].value)) {
							this.value = $inputs[1].value;
						}

						if (parseInt(this.value) <= 0) {
							this.value = 0;
						}

						$noUiSlider.noUiSlider.set([this.value, null]);

						resStart = parseInt(this.value);

						if ($result) {
							$result.innerHTML = (resStart == min && resEnd == max) ? emptyTitle : `<b>${resStart}-${resEnd} ${property}</b>`;
						}

						return false;

					}

					if (parseInt(this.value) <= parseInt($inputs[0].value)) {
						this.value = $inputs[0].value;
					}

					if (parseInt(this.value) > max) {
						this.value = max;
					}

					resEnd = parseInt(this.value);

					$noUiSlider.noUiSlider.set([null, this.value]);

					if ($result) {
						$result.innerHTML = (resStart == min && resEnd == max) ? emptyTitle : `<b>${resStart}-${resEnd} ${property}</b>`;
					}

				});

			});

			noUiSlider.create($noUiSlider, {
				start: [
					valStart,
					valEnd
				],
				connect: true,
				range: {
					'min': min,
					'max': max
				}
			});

			$noUiSlider.noUiSlider.on('slide', function (values) {
				resStart = Math.round(values[0]);
				resEnd = Math.round(values[1]);
				$inputs[0].value = resStart;
				$inputs[1].value = resEnd;
				if ($result) {
					$result.innerHTML = `<b>${resStart}-${resEnd} ${property}</b>`
				}
			});

			$noUiSlider.noUiSlider.on('end', function (values) {
				if (resStart == min && resEnd == max) {
					if ($result) {
						$result.innerHTML = emptyTitle;
					}
				}
				$filterCheckboxForChangeForm.click();
				var $parent = $noUiSlider.closest('[data-filter-popup]');
				if ($parent)
					$parent.classList.add('active');

				virtualElement.getBoundingClientRect = generateGetBoundingClientRect($inputs[0].parentNode.getBoundingClientRect());
				placementPopper = 'top';
				instancePopper.scheduleUpdate()
				instancePopper.update();

			});

			if ($priceParentElement) {

				[...$priceParentElement.querySelectorAll('span')].forEach($node => {

					$node.addEventListener('click', function () {

						let startValue = this.getAttribute('data-value-start');
						let endValue = this.getAttribute('data-value-end');
						$noUiSlider.noUiSlider.set([startValue, null]);
						$noUiSlider.noUiSlider.set([null, endValue]);

						$inputs[0].value = startValue;
						$inputs[1].value = endValue;

						if ($result) {
							$result.innerHTML = (resStart == min && resEnd == max) ? emptyTitle : `<b>${resStart}-${resEnd} ${property}</b>`;
						}

						// change form event
						let eventChange = new Event('change');
						$filterForm.dispatchEvent(eventChange);

						virtualElement.getBoundingClientRect = generateGetBoundingClientRect($inputs[0].parentNode.getBoundingClientRect());
						placementPopper = 'top';
						instancePopper.scheduleUpdate()
						instancePopper.update();

					})

				})

			}

		});
	});

	// удаление активных классов в фильтре и скрытие попапов
	document.addEventListener('click', function () {
		$filterPopups.forEach(function (node) {
			node.classList.remove('active');
		});
	});

	// раскрытие фильтра в мобилке
	[...document.querySelectorAll('[data-toggle-filter]')].forEach(function (node) {
		node.addEventListener('click', function () {
			[...document.querySelectorAll('[data-toggle-filter]')].forEach($nodeLocal => {
				if (node !== $nodeLocal) {
					$nodeLocal.classList.remove('active');
				}
			});
			this.classList.toggle('active');
			$filter.classList.toggle('active');
		})
	});

	var form = $($filterForm),
		formAction = form.attr('action'),
		formSubmit = form.find('[data-submit]'),
		formError = form.find('[data-error]'),
		formElementsFound = form.find('[data-elements-found]');

	// Сабмит формы по клику на кнопку ПОКАЗАТЬ в тултипе
	tooltip.getButton().addEventListener('click', (e) => {
		formSubmit.click();
	});

	// убираем тултип при сабмите формы
	$(document).ajaxComplete(function (event, xhr, settings) {
		if (typeof settings.extCompleteActions == 'object') {
			for (key in settings.extCompleteActions) {
				if (settings.extCompleteActions[key] == 'catalog') {
					tooltip.hide();
				}
			}
		}
	});

	form.find("[type='reset']").click(function () {
		document.location.href = formAction + '?reset=Y';
		return false;
	});

	formSubmit.addClass('js-disabled').attr('disabled', 'disabled');

	function UpdateFilterForm() {

		if (!isProduction) {
			// layout preview version
			console.log('change form');
			return false;
		}

		if (!formSubmit.hasClass('js-disabled')) {
			formSubmit.addClass('js-disabled').attr('disabled', 'disabled');
		}

		['min', 'max'].forEach(function (type) {
			form.find('input[data-' + type + ']').each(function () {
				var limit = parseInt($(this).attr(type)),
					val = parseInt($(this).val()),
					name = $(this).attr('data-name');

				if (val == limit)
					$(this).removeAttr('name');
				else
					$(this).attr('name', name);
			});
		});

		$.ajax({
			global: false,
			type: 'GET',
			dataType: 'json',
			url: formAction,
			data: form.serialize() + '&FORM_UPDATE=Y',
			success: function (r) {
				formError.html('');

				form.find('[data-brand-id]').removeClass('disable');
				if (r.disabledBrands.length) {
					for (var key in r.disabledBrands) {
						var val = r.disabledBrands[key];
						form.find("[data-brand-id='" + val + "']").addClass('disable');
					}
				}

				form.find(':disabled').removeAttr('disabled');
				if (r.disabledItems.length) {
					for (var key in r.disabledItems) {
						var val = r.disabledItems[key];
						$('#js-filter-item-' + val).attr('disabled', 'disabled');
					}
				}

				formElementsFound.html(r.elementsFoundPrint);
				tooltip.setText(r.elementsFoundPrint.replace('Найдено', ''));
				if (parseInt(r.elementsFound) > 0) {
					tooltip.getTooltip().classList.remove('filter__tooltip_null');
				} else {
					tooltip.getTooltip().classList.add('filter__tooltip_null');
				}
				tooltip.show();

				if (parseInt(r.elementsFound) > 0) {
					if (!formSubmit.is(':visible'))
						formSubmit.show();

					formSubmit.removeClass('js-disabled').removeAttr('disabled');
				} else {
					formSubmit.hide();
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				formError.html('Возникла ошибка, попробуйте обновить страницу.');
			}
		});

		return false;
	}

	form.find('[data-brand-id]').click(function () {
		var link = $(this);
		if (link.hasClass('disable'))
			return false;

		if (link.hasClass('active')) {
			link.removeClass('active').next('input').remove();
		} else {
			link.addClass('active').after('<input type="hidden" name="' + link.attr('data-name') + '" value="' + link.attr('data-brand-code') + '" data-brand-input />');
		}

		virtualElement.getBoundingClientRect = generateGetBoundingClientRect(this.getBoundingClientRect());
		placementPopper = 'top';
		instancePopper.scheduleUpdate()
		instancePopper.update();

		return UpdateFilterForm();
	});

	form.change(function () {
		UpdateFilterForm();
	});

}

window.InitFilter = InitFilter;

if (!isProduction)
	InitFilter();