window.$ = window.jQuery = require('jquery');
window.isProduction = typeof BXP != 'undefined' ? true : false;

document.addEventListener('DOMContentLoaded', () => {
	require('./plugins/Popup/js/popup');
	require('./js-polyfills');
	require('jquery-match-height');
	require('./plugins/tabs/js/tabs');
	require('./swiper');
	require('./swiper-large');
	window.Inputmask = require('inputmask');
	window.Sortable = require('sortablejs');
	window.Tooltip = require('tooltip.js');
	require('./form');
	window.noUiSlider = require('nouislider');
	// require('./filter');
	require('./scrolling-section');
	require('./compare');
	require('./rating');
	require('./app');
});
