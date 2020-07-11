new Tabs();
window.globalPopup = new Popup();

// DropdownMenu
(() => {
	const drop = document.querySelector('.js-main__dropdown');
	if (drop) {
		drop.addEventListener('click', (() => {
			drop.classList.toggle('active');
		}), false);
		drop.querySelectorAll('.main__dropdown-link').forEach(el => {
			el.addEventListener('click', (() => {
				drop.querySelector('.main__dropdown-link.active').classList.remove('active');
				el.classList.add('active');
			}), false)
		});
	}
})();
// Lang
(() => {
	const lang = document.querySelector('.js-lang__list');
	if (lang) {
		lang.querySelectorAll(".js-lang__item").forEach(el => {
			el.addEventListener('click', (() => {
				lang.querySelector(".js-lang__item.active").classList.remove("active");
				el.classList.add("active");
				lang.classList.toggle('active');
			}), false);
		})

	}
})();
(() => {


	$(document).on('click', '.popup__list', function (e) {
		const lang = document.querySelector('.popup__list');
		lang.querySelectorAll("li").forEach(el => {
			el.addEventListener('click', (() => {
				lang.querySelector("li.active").classList.remove("active");
				el.classList.add("active");


			}), false);
			if (lang.classList.contains('active')) {
				lang.classList.remove('active');
			} else {
				lang.classList.add('active');
			}
		})
	});


})();
$('[data-ajax]').click(function (e) {
	e.preventDefault();
	globalPopup.preloader(true);
	fetch(this.dataset.url)
		.then(response => {
			if (!response.ok) {
				globalPopup.preloader(false);
				alert('Error!')
				return;
			}
			response.text().then(data => {
				globalPopup
					.html(data)
					.show()
					.preloader(false);
			});

		});

});
$(document).on('click', 'a.share', function (e) {
	event.preventDefault();
	var copytext = $(this).attr('href');
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val(copytext).select();
	document.execCommand("copy");
	$temp.remove();
	$(this).append('<span class="tooltip">Ссылка скопирована</span>');
	setTimeout(function () {
		$('.tooltip').remove()
	}, 1500);
});

(() => {
	let sortable = document.getElementById('sortable');
	if (sortable) {
		new Sortable.default(sortable, {
			handle: '.sort__button', // handle's class
			animation: 150,
			multiDrag: true,
		});
	}
})();
window.initTooltipApp = function () {

	// tooltip
	[...document.querySelectorAll('[data-tooltip]')].forEach($node => {

		if ($node.getAttribute('aria-describedby')) {
			return false;
		}

		var isContentHtml = $node.getAttribute('data-tooltip');
		var htmlContent = '';

		if (isContentHtml == 'html') {

			htmlContent = $node.querySelector('[data-tooltip-content]').outerHTML;

		} else {

			var data = JSON.parse($node.getAttribute('data-tooltip'));
			var html = [];
			var target = '';

			if (data.title) {
				html.push(`<div class="tooltip-popper__title">${data.title}</div>`);
			}

			if (data.text) {
				html.push(`<div class="tooltip-popper__text">${data.text}</div>`);
			}

			if (data.linkName) {
				if (data.linkTarget) {
					target = `target="${data.linkTarget}"`;
				}
				html.push(`<a href="${data.linkHref}" ${target} class="">${data.linkName}</a>`);
			}

			htmlContent = `
					<div class="tooltip-popper">
						${html.join('')}
					</div>
				`;

		}

		var setPosition = function (left, top) {
			return {
				left: left % 2 == 0 ? left : left + 1,
				top: top % 2 == 0 ? top : top + 1
			}
		}

		var tooltip = new Tooltip.default($node, {
			placement: 'top', // or bottom, left, right, and variations
			title: htmlContent,
			template: `<div class="tooltip" role="tooltip"><div class="tooltip-close"></div><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>`,
			html: true,
			popperOptions: {
				positionFixed: true,
				onCreate(_constructor, s, d) {
					_constructor.instance.popper.querySelector('.tooltip-close').addEventListener('click', function () {
						tooltip.hide()
						_constructor.instance.reference.setAttribute('data-init', false);
					});
					let coords = setPosition(_constructor.offsets.popper.left, _constructor.offsets.popper.top);
					_constructor.instance.popper.style.transform = '';
					_constructor.instance.popper.style.left = `${coords.left}px`;
					_constructor.instance.popper.style.top = `${coords.top}px`;
				},
				onUpdate(_constructor) {
					let coords = setPosition(_constructor.offsets.popper.left, _constructor.offsets.popper.top);
					_constructor.instance.popper.style.transform = '';
					_constructor.instance.popper.style.left = `${coords.left}px`;
					_constructor.instance.popper.style.top = `${coords.top}px`;
				}
			}
		});

	});

};

initTooltipApp();
