<p>
    Если хотим, чтоб мы обращались к одному экземпляру попап, то создать одну глобальную переменную, либо через var свои экземпляры
</p>
<pre>
    window.globalPopup = new Popup(); 		// инициализация попап
</pre>
<p>
    <b>Попап имеет методы:</b>
</p>
<p>
    <b>options</b> - должен вызываться первым
</p>
<pre>
    globalPopup.options({
	clearClose: true,			// Очищаем контейнер после закрытия попап
        bodyHidden: true,			// Убирает скролл у тега &lt;body&gt;
        addClassNamePopup: 'dopclass',		// Дополнительный класс добавляем контейнеру попапа, который будет удаляться при закрытии попап, по умолчанию он пустой
        closeShow: true,			// Скрываем, либо показываем кнопку закрытия
	closeOverlay: true,			// Закрытие попап при клике по заднему фону
        background: '',				// По умолчанию цвет прописан в файле popup.less, но можем динамически изменить цвет
        closeButtons: '',			// Тут можно дополнительно назначить кнопки закрытия, используем селекторы, можно несколько через запятые, пример: closeButtons: '.block, #element'
        coordElement: ''			// Здесь можно прописать селектор, над которым всплывет попап, только один элемент
        offsetY: 0,				// Смещение от левого верхнего угла относительно элемента coordElement
        offsetX: 0,				// Смещение от левого верхнего угла относительно элемента coordElement
    }).html(response).show();
</pre>
<p>
    <b>html</b> - Вставляем что-либо в попап
</p>
<pre>
    globalPopup.html(response); 			// Вставляем что-либо в попап
    globalPopup.html(response, function() {		// Имеет callback

    });
</pre>
<p>
    <b>append</b> - Добавляем что-либо в попап
</p>
<pre>
    globalPopup.append(response); 			// Добавляем что-либо в попап
    globalPopup.append(response, function() {	// Имеет callback

    });
</pre>
<p>
    <b>show</b> - Этот метод выводит попап, иначе ничего не увидете
</p>
<pre>
    globalPopup.show();
    globalPopup.show(function() {			// Имеет callback

    });
</pre>
<p>
    <b>close</b> - Если нужно закрыть попап, по умолчанию закрывает <b>крестик</b> и <b>клик по фону</b>
</p>
<pre>
    globalPopup.close();
    globalPopup.close('clear', function() {			// 'clear' - очищает контейнер и имеет callback

    });
</pre>
<p>
    <b>clear</b> - Очищаем содержимое попап
</p>
<pre>
    globalPopup.clear();
</pre>
<p>
    <b>loader</b> - Индикатор подгрузки
</p>
<pre>
    globalPopup.loader(true);
	globalPopup.loader(false);
</pre>
