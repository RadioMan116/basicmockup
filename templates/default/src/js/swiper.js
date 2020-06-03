(function() {

	if(document.querySelector('[data-swiper]')) {

		import('swiper').then((Swiper) => {

			var swiperInit = function() {

				var swiperElements = document.querySelectorAll('[data-swiper]');

				swiperElements.forEach(function(node) {

					if(node.classList.contains('swiper-container-horizontal') || node.classList.contains('swiper-container-vertical')) {
						return false;
					}

					var options = JSON.parse(node.getAttribute('data-options'));
					var length = node.querySelectorAll('.swiper-slide').length;

					if(!options.pagination) {
						options.pagination = {};
					}

					options.pagination.el = node.parentNode.querySelector('.js-swiper-pagination');
					options.pagination.clickable = true;

					options.navigation = {
						nextEl: node.parentNode.querySelector('.js-swiper__next'),
						prevEl: node.parentNode.querySelector('.js-swiper__prev')
					}

					if(!options.slidesPerView) {
						if(length < 2) {
							if(options.navigation.prevEl || options.navigation.nextEl) {
								options.navigation.prevEl.style.display = 'none';
								options.navigation.nextEl.style.display = 'none';
							}
						}
					} else {
						if(length < parseInt(options.slidesPerView)) {
							if(options.navigation.prevEl || options.navigation.nextEl) {
								options.navigation.prevEl.style.display = 'none';
								options.navigation.nextEl.style.display = 'none';
							}
						}
					}

					new Swiper.default(node, options);

				});
			}

			swiperInit();

		});
	}

})();
