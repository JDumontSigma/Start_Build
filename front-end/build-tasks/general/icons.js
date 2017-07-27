/**
 * Icons
 */

'use strict';

module.exports = ( paths, gulp, plugins ) => {

	// Return module
  return () => {

		// Copy assets
    return gulp.src(['./node_modules/font-awesome/fonts/**.*', `${paths.app}/assets/fonts/**`]) 
			.pipe(gulp.dest(`${paths.dist}/assets/fonts`))
			.pipe(gulp.dest(`${paths.server}/assets/fonts`))
			.pipe(plugins.preservetime())
			.pipe(plugins.browserSync.stream());
  };
};
