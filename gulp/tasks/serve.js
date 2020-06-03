module.exports = () => {

	var config = {
		server: {
			baseDir: `${app.template}/dist/`
		},
		host: 'localhost',
		logPrefix: 'mockup'
	};

	app.gulp.task('webserver', () => {
		app.browserSync.init(config);
	});

}
