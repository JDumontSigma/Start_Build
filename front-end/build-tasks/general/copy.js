/**
 * Copy
 */

'use strict';

module.exports = ( paths, gulp, plugins ) => {

	// Return module
  return () => {

    return gulp.src([`${paths.app}/assets/css`, `${paths.app}/assets/js`, `${paths.app}/assets/img`, `${paths.app}/assets/fonts/`])
			.pipe(plugins.newer(`${paths.dist}/assets`))
			.pipe(gulp.dest(`${paths.dist}/assets`))
			.pipe(plugins.newer(`${paths.server}/assets`))
			.pipe(gulp.dest(`${paths.server}/assets`))
			.pipe(plugins.preservetime());
  };
};
