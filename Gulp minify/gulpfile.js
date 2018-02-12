var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyJS = require('gulp-uglify');
let minifyCSS = require('gulp-clean-css');

gulp.task('dist', ['dist-styles', 'dist-js', 'dist-html']);

gulp.task('dist-styles', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('bundle.min.css'))
    .pipe(minifyCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('dist-js', function () {
  return gulp.src(['./src/js/**/*.js', '!./src/js/excludeme.js'])
    .pipe(concat('bundle.min.js'))
    .pipe(minifyJS())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('dist-html', function () {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./dist/'));
});
