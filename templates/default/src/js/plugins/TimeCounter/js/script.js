$(document).ready(function() {

	var timers = document.querySelectorAll('.js-timer');

	Array.prototype.forEach.call(timers, function(node) {

		new TimeCounter({
			time: node.getAttribute('data-time'),
			callback: function(d, h, m, s) {
				node.innerHTML = d + ' ' + h + ' ' + m + ' ' + s;
			},
			timeEnd: function(d, h, m, s) {
				alert('End');
			}
		});

	});

});