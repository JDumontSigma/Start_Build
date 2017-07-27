/**
 * Watch
 */

'use strict';

module.exports = ( paths, gulp, plugins ) => {

  return () => {

		// Static assets
    plugins.watch([
      `${paths.app}/assets/**`,
      `${paths.app}/favicon.ico`
    ], plugins.batch(function (events, done) {
      return plugins.sequence('copy', done);
    }));

		// HTML templates (including critical inline JS)
    plugins.watch([
      `${paths.app}/templates/**/*.html`,
      `${paths.app}/styleguide/*.html`,
      `${paths.dist}/assets/js/common.min.js`,
      `${paths.dist}/assets/css/critical.css`
    ], plugins.batch(function (events, done) {
      return plugins.sequence('html', 'html-lint', done);
    }));

		// Stylesheets
    plugins.watch(`${paths.app}/assets/scss/**/*.scss`, plugins.batch(function (events, done) {
      return plugins.sequence('css-lint', 'css', 'css-chunk', done);
    }));

		// JavaScript
    plugins.watch(`${paths.app}/assets/js/**/*.js`, plugins.batch(function (events, done) {
      return plugins.sequence('js-lint', 'js', done);
    }));
  };
};
