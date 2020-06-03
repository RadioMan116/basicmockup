(function () {

	let scrollingArrows = document.querySelectorAll('[data-scrolling]');

	scrollingArrows.forEach(function (node) {

		let prev = node.querySelector('[data-scrolling-prev]');
		let next = node.querySelector('[data-scrolling-next]');
		let section = node.parentNode.querySelector('[data-scrolling-section]');

		let mq = window.matchMedia('(max-width: 768px)').matches;
		let distance = section.offsetWidth;

		prev.addEventListener('click', function () {
			if (mq) {
				$(section).stop().animate({ scrollLeft: '-=' + distance });
			}
		});

		next.addEventListener('click', function () {
			if (mq) {
				$(section).stop().animate({ scrollLeft: '+=' + distance });
			}
		});
	});

})();