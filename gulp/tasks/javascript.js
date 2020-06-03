const path = require('path');

module.exports = () => {

	app.gulp.task('js', function () {
		return app.gulp.src(`${app.template}/src/js/index.js`)
			.pipe(app.gulpPlugins.plumber())
			.pipe(app.gulpWebpack({
				entry: {
					lazyload: `./${app.template}/src/js/lazyload.js`,
					main: `./${app.template}/src/js/index.js`
				},
				output: {
					path: path.resolve(__dirname, `${app.template}/dist`),
					filename: 'js/[name].bundle.js',
					chunkFilename: 'js/[name].bundle.js',
					publicPath: app.mode == 'production' ? app.path : ''
				},
				mode: global.app.mode,
				devtool: 'source-map',
				module: {
					rules: [{
						test: /\.js$/,
						exclude: /node_modules/,
						use: [{
							loader: 'babel-loader'
						}]
					}]
				}
			}, app.webpack))
			.pipe(app.gulp.dest(`${app.template}/dist/`))
			.on('end', app.browserSync.reload);
	});

}