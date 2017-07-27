/**
 * HTML (Lint)
 */

'use strict';

module.exports = ( paths, gulp, plugins ) => {

  return ( callback ) => {
    return gulp.src(`${paths.dist}/*.html`)
			.pipe(plugins.htmlhint())
			.pipe(plugins.htmlhint.reporter('htmlhint-stylish'));
  };
};
