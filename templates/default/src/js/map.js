(function() {
  
	let myFirstPromise = new Promise((resolve, reject) => {
  // Мы вызываем resolve(...), когда асинхронная операция завершилась успешно, и reject(...), когда она не удалась.
  // В этом примере мы используем setTimeout(...), чтобы симулировать асинхронный код. 
  // В реальности вы, скорее всего, будете использовать XHR, HTML5 API или что-то подобное.
  setTimeout(function(){
    resolve("Success!"); // Ура! Всё прошло хорошо! 
  }, 250);  
});

myFirstPromise.then((successMessage) => {
  // successMessage - это что угодно, что мы передали в функцию resolve(...) выше.
  // Это необязательно строка, но если это всего лишь сообщение об успешном завершении, это наверняка будет она.
  console.log("Ура! " + successMessage);
});

	var each = function(arr, callback) {
		Array.prototype.forEach.call(arr, function(node, index) {
			callback.call(node, index)
		});
	}

	var inputs = document.querySelectorAll('.js-map__inputs');
	var textChange = document.querySelectorAll('.js-map__changetext');
	var title = document.querySelector('[data-map-text]');
	var g = document.querySelectorAll('.js-map__point');

	each(inputs, function(index) {

		if(this.checked) {
			document.querySelector(this.getAttribute('data-point')).classList.add('active');
			title.innerHTML = textChange[index].innerHTML;
		}

		this.addEventListener('change', function() {
			each(g, function() {
				this.classList.remove('active');
			});
			document.querySelector(this.getAttribute('data-point')).classList.add('active');
			title.innerHTML = textChange[index].innerHTML;
		});

	});

})();
