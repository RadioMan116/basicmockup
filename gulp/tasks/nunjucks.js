module.exports = () => {

	var configHtml = {
		'indent_size': 1,
		'indent_char': '\t',
		'brace_style': 'expand',
		'space_before_conditional': false,
		'unformatted': ['sub', 'sup', 'b', 'u', 'span', 'a', 'br']
	}

	app.gulp.task('nunjucks', () => {

		return app.gulp.src(`${app.template}/src/pages/*.+(html|njk)`)
			.pipe(app.gulpPlugins.plumber())
			.pipe(app.gulpPlugins.nunjucksRender({
				path: `${app.template}/src/components/`,
				data: {
					src: "images/"
				}
			}))
			.pipe(app.gulpPlugins.htmlPrettify(configHtml))
			.pipe(app.gulp.dest(`${app.template}/dist/`))
			.on('end', app.browserSync.reload);

	});

}