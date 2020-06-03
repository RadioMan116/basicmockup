(function() {

	var createElement = function(obj, cls, parent) {
		var o = document.createElement(obj);

		if (cls) {
			o.classList.add(cls);
		}

		if (parent) {
			parent.appendChild(o);
		}
		return o;
	}

	var extend = function(defaults, source) {

		for (var key in source) {
			if (source.hasOwnProperty(key)) {
				defaults[key] = source[key];
			}
		}

		return defaults;
	}

	var MobileMenu = function(opts) {
		this.init(opts);
		this.create();
		this.events();
	}

	MobileMenu.prototype = {

		init: function(opts) {

			this.defaults = extend({
				mainContainer: '.wrapper',
				direction: 'right',
				burger: '[data-mobile-menu-burger]',
				close: '[data-mobile-menu-close]',
				createFn: function() {}
			}, opts);

			this.tags = {};

		},

		create: function() {

			var _body = document.body;

			this.tags.mobileMenu = createElement('div', 'mobile-menu');
			this.tags.mobileMenuClose = createElement('div', 'mobile-menu__close', this.tags.mobileMenu);
			this.tags.mobileMenuClose.innerHTML = '<span><i></i><i></i></span>';
			this.tags.mainContainer = document.querySelector(this.defaults.mainContainer);
			this.tags.mobileMenuChange = createElement('div', 'mobile-menu__section', this.tags.mobileMenu);
			this.tags.mainContainer.classList.add('mobile-menu-wrapper');
			this.tags.burger = document.querySelectorAll(this.defaults.burger);

			_body.insertBefore(this.tags.mobileMenu, _body.firstChild);

			if (this.defaults.direction == 'right') {
				this.tags.mobileMenu.classList.add('mobile-menu_right');
				this.tags.mainContainer.classList.add('mobile-menu-wrapper_right');
			}

			this.defaults.createFn.call(this.tags.mobileMenuChange);

		},

		events: function() {

			this.tags.mobileMenuClose.addEventListener('click', function() {
				document.body.classList.toggle('menu-open');
			});

			this.each(this.tags.burger, function() {
				this.addEventListener('click', function() {
					document.body.classList.toggle('menu-open');
				});
			});

		},

		each: function(arr, callback) {
			Array.prototype.forEach.call(arr, function(node, index) {
				callback.call(node, index);
			});
		}
	}

	window.MobileMenu = MobileMenu;

})();

new MobileMenu({
	direction: 'left',
	createFn: function() {
		this.innerHTML = '<div class="mobile-menu__header">Alma tour</div>';
		this.innerHTML += document.querySelector('#js-menu-header').outerHTML;

		this.innerHTML += `
			<div class="social-like">
				<div class="social-like__text">Поделитесь с друзьями приглянувшимся туром</div>
				<!-- /.social-like__text -->
				<div class="social-like__row">
					<div class="social-like__item">
						<a href="#" class="social-like__link">
							<img data-src="images/facebook.svg" alt="" class="social-like__pic lazyload">
						</a>
					</div>
					<!-- /.social-like__item -->
					<div class="social-like__item">
						<a href="#" class="social-like__link">
							<img data-src="images/vk.svg" alt="" class="social-like__pic lazyload">
						</a>
					</div>
					<!-- /.social-like__item -->
					<div class="social-like__item">
						<a href="#" class="social-like__link">
							<img data-src="images/telega.svg" alt="" class="social-like__pic lazyload">
						</a>
					</div>
					<!-- /.social-like__item -->
					<div class="social-like__item">
						<a href="#" class="social-like__link">
							<img data-src="images/twitter.svg" alt="" class="social-like__pic lazyload">
						</a>
					</div>
					<!-- /.social-like__item -->
					<div class="social-like__item">
						<a href="#" class="social-like__link">
							<img data-src="images/subscribe.svg" alt="" class="social-like__pic lazyload">
						</a>
					</div>
					<!-- /.social-like__item -->
				</div>
				<!-- /.social-like__row -->
			</div>
			<!-- /.social-like -->
		`;

		this.innerHTML += `<div class="mobile-menu__footer">Alma Tour, ${new Date().getFullYear()} г. Копирование материалов сайта запрещено. </div>`;

	}
});
