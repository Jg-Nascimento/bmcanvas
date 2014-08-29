var gulp       = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('assets/js/*.js').on('change', livereload.changed);
  gulp.watch('./*.html').on('change', livereload.changed);
  gulp.watch('./*.css').on('change', livereload.changed);
});
