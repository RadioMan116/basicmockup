var rating = function ({ element = null, rate = 5, callback = () => { } }) {

	if (!element) {
		return;
	}

	var $items = element.querySelectorAll('i');

	[].forEach.call($items, (item, index) => {

		item.addEventListener('mouseenter', function () {

			this.parentNode.setAttribute('data-rating', index + 1)

		});

		item.addEventListener('click', function () {

			this.parentNode.setAttribute('data-rating', index + 1)

			callback(index + 1);

		});

	})



}

window.rating = rating;