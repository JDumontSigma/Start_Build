/**
 * Optimise images
 */

'use strict';

module.exports = ( paths, gulp, plugins ) => {

	// Child modules
  const pngquant = require('imagemin-pngquant'),
        mozjpeg = require('imagemin-mozjpeg'),
        gifsicle = require('imagemin-gifsicle'),
        svgo = require('imagemin-svgo');

	// Return module
  return () => {

		// Override plugins (default + pngquant, mozjpeg)
    const use = [
      plugins.imagemin.gifsicle(),
      plugins.imagemin.svgo(),
      pngquant(),
      mozjpeg({
        quality: 70,
        progressive: true
      })
    ];

    return gulp.src(`${paths.app}/assets/img/**/*.{png,jpg,gif,svg}`)
      .pipe(plugins.imagemin(use))
      .pipe(gulp.dest(`${paths.server}/assets/img`))
			.pipe(gulp.dest(`${paths.dist}/assets/img`));
  };
};
