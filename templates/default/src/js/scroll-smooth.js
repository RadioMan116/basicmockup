(function () {

	var links = document.querySelectorAll('[data-scroll-smooth]');

	var smoothScroll = function (target) {
		document.querySelector(target).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}

	Array.prototype.forEach.call(links, function (node) {
		node.addEventListener('click', function (e) {
			e.preventDefault();

			document.body.classList.remove('menu-open');

			var target = this.getAttribute('data-hash') ? this.getAttribute('data-hash') : this.getAttribute('href');

			smoothScroll(target);

			setTimeout(() => {
				smoothScroll(target);
			}, 1000);

		});
	});

})();