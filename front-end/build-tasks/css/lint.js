'use strict';
/**
 * Lint the css
 */

 module.exports = ( paths, gulp, plugins ) => {

   return ( callback ) => {
      return gulp.src(`${paths.app}/assets/scss/**/*.scss`)
         .pipe(plugins.stylelint({
            failAfterError: false,
            reports: [
               {
                  formatter: 'string',
                  console: true
               }
            ]
         }));

   };
 };

