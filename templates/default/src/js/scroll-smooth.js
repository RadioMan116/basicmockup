(function() {

	var links = document.querySelectorAll('[data-scroll-smooth]');

	Array.prototype.forEach.call(links, function(node) {
		node.addEventListener('click', function(e) {
			e.preventDefault();
			document.querySelector(this.getAttribute('data-hash')).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		})
	});

})();
