class Compare {

	constructor() {
		this.proxyRows = [];
	}

	sectionHide(buttons) {

		buttons.forEach(function (node) {
			node.addEventListener("click", function () {
				this.parentNode.classList.toggle("active");
			});
		});

	}

	compareBlocks(trigger, row, selectorProperties) {

		if (trigger) {
			if (this.proxyRows.length == 0) {
				row.forEach((node) => {

					let props = node.querySelectorAll(selectorProperties);
					let propsFirstItemText = props[0].innerHTML;
					let trigger = false;

					trigger = [...props].some(item => {
						return item.innerHTML != propsFirstItemText;
					});

					if (!trigger) {
						this.proxyRows.push(node);
						node.classList.add("hide");
					}
				});
			} else {
				this.proxyRows.forEach(function (node) {
					node.classList.add("hide");
				});
			}

		} else {
			row.forEach(function (node) {
				node.classList.remove("hide");
			});
		}

	}

	arrowNavigation(prev, next, scrollItems) {

		let mq = window.matchMedia("(max-width: 768px)");
		const distance = mq.matches ? 148 : 278;
		let i = 0;

		if (prev) {

			prev.addEventListener("click", function () {
				i = i + distance;
				scrollItems.forEach(function (node) {
					$(node).stop().animate({
						scrollLeft: "-=" + distance
					});
				});
			});

		}

		if (next) {

			next.addEventListener("click", function () {
				i = i - distance;
				scrollItems.forEach(function (node) {
					$(node).stop().animate({
						scrollLeft: "+=" + distance
					});
				});
			});

		}
	}

	scroll(scrollItems) {

		scrollItems.forEach(function (item) {
			item.addEventListener("scroll", function () {
				var obj = this;
				scrollItems.forEach(function (node) {
					if (node !== obj) {
						node.scrollLeft = obj.scrollLeft;
					}
				});

			});
		});

	}
}

let $compare = document.querySelector("#js-compare");
if ($compare) {

	let scrollItems = $compare.querySelectorAll("[data-compare-scroll]");
	let prev = $compare.querySelector("[data-compare-prev]");
	let next = $compare.querySelector("[data-compare-next]");
	let checkbox = $compare.querySelector("[data-compare-checkbox]");
	let row = $compare.querySelectorAll("[data-compare-row]");
	let buttons = $compare.querySelectorAll("[data-compare-button]");
	let $compareTop = $compare.querySelector("[data-compare-topwrapper]");
	let isMobile = window.matchMedia("(max-width: 767px)").matches;

	let compare = new Compare();

	compare.scroll(scrollItems);
	compare.arrowNavigation(prev, next, scrollItems);
	compare.sectionHide(buttons);
	compare.compareBlocks(true, row, "[data-compare-prop]");

	checkbox.addEventListener("change", function () {
		if (this.checked) {
			compare.compareBlocks(true, row, "[data-compare-prop]");
		} else {
			compare.compareBlocks(false, row, "[data-compare-prop]");
		}
	});

	document.querySelector("body").classList.add("header-static");

	$compareTop.style.height = $compareTop.offsetHeight + "px";

	window.addEventListener("scroll", function () {
		let top = window.pageYOffset;
		if (top >= (isMobile ? 275 : 290)) {
			$compareTop.classList.add("compare__topwrapper_fixed");
		} else {
			$compareTop.classList.remove("compare__topwrapper_fixed");
		}
	});

}