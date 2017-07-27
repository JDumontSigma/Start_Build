/**
 * HTML
 */

'use strict';

module.exports = ( paths, gulp, plugins ) => {

	// Child modules
  var nunjucks = require('nunjucks');

  var options = {
    env: new nunjucks.Environment(new nunjucks.FileSystemLoader([
      `${paths.app}/templates`,
      `${paths.app}/styleguide`
    ], {
      noCache: true
    }))
  };

  var data = {
    timestamp: Date.now(),
    paths: paths
  };

	// Add filters
  options.env.addFilter('outputFileContent', require('./filters/output-file-content'));

	// Return module
  return () => {

    return gulp.src([
      `${paths.app}/templates/*.html`,
      `${paths.app}/styleguide`
    ])
			.pipe(plugins.nunjucks.compile(data, options))
      .pipe(gulp.dest(paths.dist))
      .pipe(gulp.dest(paths.server))
			.pipe(plugins.filter('**/*.html'))
			.pipe(plugins.browserSync.stream());
  };
};
