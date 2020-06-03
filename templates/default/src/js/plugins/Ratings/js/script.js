$(document).ready(function() {


	$('.js-ratings__section').each(function(i) {

		new Ratings({
			element: this,
			clickFn: function(index) {
				alert(index);
			}
		});

	});

});