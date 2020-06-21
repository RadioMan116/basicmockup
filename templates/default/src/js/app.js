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
