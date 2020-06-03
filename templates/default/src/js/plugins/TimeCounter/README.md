<p>
	<b>Структура HTML</b>
</p>

<pre>

	&lt;div class="js-timer" data-time="2017/12/01 10:00:00 GMT+0300"&gt;

</pre>

<p>
	<b>В скрипте</b>
</p>

<pre>
	var timers = document.querySelectorAll('.js-timer');

	Array.prototype.forEach.call(timers, function(node) {

		new TimeCounter({
			time: node.getAttribute('data-time'),
			callback: function(day, hour, minutes, seconds) {
				node.innerHTML = day + ' ' + hour + ' ' + minutes + ' ' + seconds;
			},
			timeEnd: function(day, hour, minutes, seconds) {
				alert('End')
			}
		});

	});
</pre>
