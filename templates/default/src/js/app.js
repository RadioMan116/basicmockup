new Tabs();
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



function changeThemeColor() {
	var metaThemeColor = document.querySelector("body[name=theme-color]");
}

changeThemeColor();
