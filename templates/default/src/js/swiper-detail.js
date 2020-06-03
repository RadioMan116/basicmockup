(function () {

	const isMobile = window.matchMedia('(max-width: 767px)').matches;

	if (document.querySelector('[data-gallery-top]')) {

		import('swiper').then((Swiper) => {

			var swiperInit = function () {

				var swiperElements = document.querySelectorAll('[data-gallery-bottom]');

				swiperElements.forEach(function (node) {

					if (node.classList.contains('swiper-container-horizontal') || node.classList.contains('swiper-container-vertical')) {
						return false;
					}

					var more = node.parentNode.parentNode.querySelector('[data-swiper-more]')
					var options = JSON.parse(node.getAttribute('data-options'));

					options.on = {
						slideChange: function () {
							if (this.slides.length - this.realIndex - 7 <= 7) {
								more.innerHTML = `Еще ${this.slides.length - this.realIndex - 7} фото`;
							}
							if (this.realIndex + 7 > this.slides.length - 1) {
								more.innerHTML = `0 фото`;
							}
						}
					}

					var swiperThumbs = new Swiper.default(node, options);

					var swiperLarge = new Swiper.default(node.parentNode.parentNode.querySelector('[data-gallery-top]'), {
						spaceBetween: 10,
						lazy: true,
						navigation: {
							nextEl: node.parentNode.querySelector('.js-swiper__next'),
							prevEl: node.parentNode.querySelector('.js-swiper__prev')
						},
						thumbs: {
							swiper: swiperThumbs,
						},
						breakpoints: {
							767: {
								// autoHeight: true
							}
						}
					});

					if (swiperThumbs.slides.length < 7) {
						more.style.display = 'none';
					}

					more.addEventListener('click', function () {
						swiperThumbs.slideTo(swiperThumbs.realIndex + 7);
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