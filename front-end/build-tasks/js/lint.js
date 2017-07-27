/**
 * JavaScript (Lint)
 */

'use strict';

module.exports = ( paths, gulp, plugins ) => {

  return ( callback ) => {
    return gulp.src(`${paths.app}/assets/js/**/*.js`)
			.pipe(plugins.eslint())
			.pipe(plugins.eslint.format());
  };
};
