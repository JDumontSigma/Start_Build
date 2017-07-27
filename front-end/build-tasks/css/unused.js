'use strict';

/**
 * Remove unused css
 */

module.exports = ( paths, gulp, plugins ) => {
   const purify = require('gulp-purifycss');

   return () => {
      return gulp.src(`${paths.dist}/assets/css/styles.css`)
         .pipe(purify([
            `${paths.dist}/*.html`
         ]))
         .pipe(gulp.dest(`${paths.dist}/assets/css/`))
         .pipe(gulp.dest(`${paths.server}/assets/css/`));
   }
}