window.addEventListener('scroll', function() {

	var top = window.pageYOffset;
	top > 300 ? document.body.classList.add('body-scroll-up') : document.body.classList.remove('body-scroll-up');

});

$('[data-scroll-up]').click(function() {
	$('html, body').animate({scrollTop: 0}, 500);
});
