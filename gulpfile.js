var gulp = require('gulp');
var react = require('gulp-react');
var plumber = require('gulp-plumber');
var cncat = require('gulp-concat');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var reactify = require('reactify');

gulp.task("scripts", function() {
  gulp.src(['app/*.js', 'app/*.jsx'])
    .pipe(react())
    .pipe(babel())
    .pipe(plumber())
    .pipe(cncat('application.js'))
    .pipe(gulp.dest('compiled'));
});

gulp.task('watch', function() {
  gulp.watch(['app/*.jsx'], ['scripts']);
  gulp.watch(['app/*.js'], ['data']);
});

gulp.task('default', ['scripts', 'watch']);
