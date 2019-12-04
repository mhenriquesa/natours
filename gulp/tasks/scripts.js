const gulp = require('gulp'),
webpack = require('webpack');

// Functions -----------
function webpackPipe(cb) {
	webpack(require('../../webpack.config.js'), webpackTest)
	cb()
}

function webpackTest(err, stats) {
	if (err) {
		console.log(err.toString());
	}
	console.log(stats.toString());
}
// ----------------------

gulp.task('scripts', webpackPipe);