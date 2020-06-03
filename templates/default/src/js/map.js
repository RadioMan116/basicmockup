function Map(selectorMap = '[data-map]', selectorsButton = '[data-map-button]', coords = 'data-map-coords', center = 'data-map-center') {
	this.selectorMap = selectorMap;
	this.selectorsButton = selectorsButton;
	this.coords = coords;
	this.center = center;

	if (Map.exists) {
		return Map.instance
	}

	Map.instance = this;
	Map.exists = true;

	Map.yascript = document.createElement('script');
	Map.yascript.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';

	let options = {
		root: null,
		rootMargin: '0px',
		threshold: 1.0
	};

	let callback = function (entries, observer) {
		document.body.appendChild(Map.yascript);
	};

	let observer = new IntersectionObserver(callback, options);
	let target = document.querySelector('body');
	observer.observe(target);

}

Map.prototype = {

	init() {

		let myMap, $map, $buttons, arrayCoords = [], placeCenter = null, placemarks = [];

		$map = document.querySelector(this.selectorMap);
		$buttons = document.querySelectorAll(this.selectorsButton);

		if (!$buttons.length) {
			return false;
		}

		[...$buttons].forEach(($node, index) => {

			arrayCoords.push($node.getAttribute(this.coords));

			if (!placeCenter) {
				placeCenter = $node.getAttribute(this.center);
			}

		});

		Map.yascript.addEventListener('load', () => {

			ymaps.ready(function () {

				let center = placeCenter.split(',');

				myMap = new ymaps.Map($map, {
					center: [parseFloat(center[0]), parseFloat(center[1])],
					zoom: 9
				}, {
					searchControlProvider: 'yandex#search'
				});

				myMap.controls
					.remove('mapTools')
					.remove('typeSelector')
					.remove('smallZoomControl')
					.remove('scaleLine')
					.remove('miniMap')
					.remove('searchControl')
					.remove('trafficControl')
					.remove('mapTools');

				if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || screen.width < 768) {
					myMap.behaviors.disable('drag');
				}

				arrayCoords.forEach(item => {

					let coords = item.split(',');

					let myPlacemark = new ymaps.Placemark([parseFloat(coords[0]), parseFloat(coords[1])], {}, {});

					placemarks.push(myPlacemark);

					myMap.geoObjects
						.add(myPlacemark);

				});

				[...$buttons].forEach(($node, index) => {

					$node.addEventListener('click', function () {
						[...$buttons].forEach($node => {
							$node.classList.remove('active');
						});
						this.classList.add('active');
						let _coords = arrayCoords[index].split(',');
						myMap.setCenter([parseFloat(_coords[0]), parseFloat(_coords[1])]);

						placemarks.forEach(place => {
							place.options
								// Во избежание двойной реакции геообъекта
								// на изменение опций сначала вызываем freeze, а после задания
								// всех значений вызываем unfreeze.
								.freeze()
								.unsetAll()
								.set('preset', 'islands#blueIcon')
								.unfreeze();
						});

						placemarks[index].options.set({
							zIndex: 1000,
							'preset': 'islands#redIcon'
						});
					});

					if (index === 0) {
						$node.click()
					}

				});

			});

		});

	}

}

window.Map = Map;