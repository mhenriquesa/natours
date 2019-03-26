var gulp = require('gulp'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  browserSync.init({
    notify: true,
    server: {
      baseDir: "app"
    },
    ghostMode: false
  });

  gulp.watch('./app/index.html', function(cb) {
    browserSync.reload();
    cb()
  });
  gulp.watch('./app/assets/styles/modules/**/*', gulp.parallel('waitForStyles'));
});

gulp.task('waitForStyles', gulp.series('styles', function() {
  return gulp
    .src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());

}));