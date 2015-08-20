var gulp = require('gulp');
var react = require('gulp-react');
var plumber = require('gulp-plumber');
var cncat = require('gulp-concat');

var browserify = require('gulp-browserify');
var reactify = require('reactify');

gulp.task("scripts", function() {
  gulp.src(['app/*.jsx', 'app/*.js'])
    .pipe(browserify({
      insertGlobals: false,
      debug: false,
      transform: [reactify]
    }))
    .pipe(plumber())
    .pipe(cncat('application.js'))
    .pipe(gulp.dest('compiled'));
});

gulp.task('watch', function() {
  gulp.watch(['app/*.jsx', 'app/*.js'], ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);
