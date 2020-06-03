var TimeCounter = function(opts) {

	this.opts = this.extendFn({
		time: 0,
		callback: function() {},
		timeEnd: function() {}
	}, opts);

	this.init();

}

TimeCounter.prototype = {

	init: function() {

		var obj = this,
			ts,
			second,
			minute,
			hour,
			day,
			dateEnd = Date.parse(this.opts.time);

		var interval = setInterval(function() {

			ts = dateEnd - Date.parse(new Date());
			second = Math.floor((ts / 1000) % 60);
			minute = Math.floor((ts / 1000 / 60) % 60);
			hour = Math.floor((ts / (1000 * 60 * 60)) % 24);
			day = Math.floor(ts / (1000 * 60 * 60 * 24));

			if (second < 0) {

				second = 0;
				minute = 0;
				hour = 0;
				day = 0;

				clearInterval(interval);
				obj.opts.timeEnd(day, hour, minute, second);
			}

			obj.opts.callback(day, hour, minute, second);

		}, 1000);

	},

	extendFn: function(destination, source) {

		var property;

		for (property in source) {

			if (source.hasOwnProperty(property)) {
				destination[property] = source[property];
			}
		}

		return destination;
	}
}

module.exports = TimeCounter;
