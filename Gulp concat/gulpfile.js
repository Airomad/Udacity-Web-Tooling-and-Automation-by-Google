var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('dist', ['dist-styles', 'dist-js', 'dist-html']);

gulp.task('dist-styles', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('dist-js', function () {
  return gulp.src('./src/js/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('dist-html', function () {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./dist/'));
});
