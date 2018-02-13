var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('dist', function() {
  return gulp.src('./**/*.png')
      .pipe(imagemin({
          progressive: true,
          use: [pngquant()]
      }))
      .pipe(gulp.dest('./dist/'));
});

gulp.task('dist2', function() {
  return gulp.src('./**/*.png')
      .pipe(imagemin())
      .pipe(gulp.dest('./dist/'));
});