var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyJS = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('dist', ['dist-js', 'dist-html']);

gulp.task('dist-js', function () {
  return gulp.src('./src/js/**/*.js')
  .pipe(sourcemaps.init())
  .pipe(concat('bundle.js'))
  .pipe(minifyJS())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./dist/'));
});

gulp.task('dist-html', function () {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./dist/'));
});
