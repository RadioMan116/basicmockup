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

// Изменение цвета


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
					.preloader(false)
			});

		});
});
