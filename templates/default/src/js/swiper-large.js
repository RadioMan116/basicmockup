(function () {

	if (document.querySelector('[data-swiper-large]')) {

		import('swiper').then((Swiper) => {

			var swiperInit = function () {

				var swiperElements = document.querySelectorAll('[data-swiper-large-thumb]');

				swiperElements.forEach(function (node) {

					if (node.classList.contains('swiper-container-horizontal') || node.classList.contains('swiper-container-vertical')) {
						return false;
					}

					var options = JSON.parse(node.getAttribute('data-options'));
					var length = node.querySelectorAll('.swiper-slide').length;

					var swiperThumbs = new Swiper.default(node, options);

					// if (document.body.offsetWidth < 768) {
					// 	swiperThumbs = null;
					// }

					var swiperLarge = new Swiper.default(node.parentNode.parentNode.querySelector('[data-swiper-large]'), {
						spaceBetween: 10,
						navigation: {
							nextEl: node.parentNode.querySelector('.js-swiper__next'),
							prevEl: node.parentNode.querySelector('.js-swiper__prev')
						},
						thumbs: {
							swiper: swiperThumbs,
						}
					});

				});
			}

			swiperInit();

			$(document).ajaxSuccess(function () {
				swiperInit();
			});

		});
	}

})();
