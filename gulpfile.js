'use strict';

const gulp = require('gulp'),
      plugins = require('gulp-load-plugins')(),
      config = require('./package.json').config;

//load alternative gulp packages
plugins.browserSync = require('browser-sync').create();
plugins.sequence = require('run-sequence');
plugins.stream = require('event-stream');
plugins.combine = require('stream-combiner');

//Function to gather individual tasks
function fetchModule ( file ) {
  return require(`${config.paths.tasks}/${file}`)( config.paths, gulp, plugins );
}

gulp.task('clean', fetchModule('general/clean'));
gulp.task('copy', fetchModule('general/copy'));
gulp.task('css', fetchModule('css/main'));
gulp.task('css-lint', fetchModule('css/lint'));
gulp.task('css-chunk', fetchModule('css/chunk'));
gulp.task('html', fetchModule('html'));
gulp.task('html-lint', fetchModule('html/lint'));
gulp.task('html-a11y', fetchModule('html/a11y'));
gulp.task('js', fetchModule('js'));
gulp.task('js-lint', fetchModule('js/lint'));
gulp.task('js-modernizr', fetchModule('js/modernizr'));
gulp.task('icons', fetchModule('general/icons'));
gulp.task('images', fetchModule('general/images'));
gulp.task('watch', fetchModule('general/watch'));
gulp.task('serve', fetchModule('general/serve'));
gulp.task('aria', fetchModule('html/aria'));


gulp.task('build', ['clean'], function (callback) {
  return plugins.sequence(['js-lint', 'css-lint'], 'js-modernizr', ['js', 'css', 'icons', 'images'], ['html'], ['css-chunk', 'html-lint'], callback);
});

gulp.task('default', function (callback) {
  return plugins.sequence('build', 'copy', callback);
});

gulp.task('dev', function (callback) {
  return plugins.sequence('build', 'copy', ['watch', 'serve'], callback);
});


