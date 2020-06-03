<p>
	<b>Структура HTML</b>
</p>

<pre>
	&lt;div class="ratings"&gt;
		&lt;div class="ratings__section js-ratings__section"&gt;
			&lt;div class="ratings__start"&gt;&lt;/div&gt;
			&lt;div class="ratings__click"&gt;&lt;/div&gt;
			&lt;div class="ratings__disable"&gt;&lt;/div&gt;
			&lt;div class="ratings__hover"&gt;&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;!-- /.ratings --&gt;
</pre>
<p>
	Ниже обычный вывод звезд без динамики
</p>
<pre>
	&lt;div class="ratings ratings_output"&gt;
		&lt;div class="ratings__section"&gt;
			&lt;div class="ratings__start"&gt;&lt;/div&gt;
			&lt;div class="ratings__click" style="width: 80%;"&gt;&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;!-- end ratings --&gt;
</pre>

<p>
	<b>В скрипте</b>
</p>

<pre>
	new Ratings({
		element: document.querySelector('.js-ratings__section'),	// передаем элемент
		countRate: 5,							//  кол-во оценок, необязательный параметр, по умолчанию стоит 5
		clickFn: function(index) {
			alert(index);
		}
	});
</pre>