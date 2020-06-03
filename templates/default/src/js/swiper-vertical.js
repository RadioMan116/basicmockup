(function () {

	if (document.querySelector('.js-swiper-container')) {

		import('swiper').then((Swiper) => {

			var swiperInit = function () {

				var swiperElements = document.querySelectorAll('.js-swiper-container');

				swiperElements.forEach(function (node) {

					if (node.classList.contains('swiper-container-horizontal') || node.classList.contains('swiper-container-vertical')) {
						return false;
					}

					var swiper = new Swiper.default(node, {
						direction: 'vertical',
						slidesPerView: 'auto',
						freeMode: true,
						scrollbar: {
							el: '.js-swiper-scrollbar',
						},
						mousewheel: true,
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
