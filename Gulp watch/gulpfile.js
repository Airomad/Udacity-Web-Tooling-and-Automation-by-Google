var gulp = require('gulp');
var sass = require('gulp-sass');
const babel = require('gulp-babel');

var stylesMask = './src/sass/**/*.scss';
var jsMask = './src/js/**/*.js';

gulp.task('watch', function () {
  gulp.watch(stylesMask, ['styles']);
  gulp.watch(jsMask, ['js']);
});

gulp.task('styles', function () {
  return gulp.src(stylesMask)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('js', function () {
  return gulp.src(jsMask)
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('./build/js'));
});
