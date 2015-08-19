var gulp = require('gulp');
var react = require('gulp-react');
var plumber = require('gulp-plumber');
var cncat = require('gulp-concat');

var applicationPath = 'app/*.jsx';

gulp.task("scripts", function() {
  gulp.src([applicationPath])
    .pipe(react())
    .pipe(plumber())
    .pipe(cncat('application.js'))
    .pipe(gulp.dest('compiled'));
});

gulp.task('watch', function() {
  gulp.watch([applicationPath], ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);
