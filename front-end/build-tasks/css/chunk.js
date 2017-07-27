'use strict';
/**
 * Remove selector limit problems
 */
module.exports = ( paths, gulp, plugins ) => {

   const csswring = require('csswring');

   return () => {
      gulp.src(`${paths.dist}/assets/css/styles.css`)
      
      //prevent overwriting the original 
      .pipe(plugins.rename({
         suffix: '-legacy'
      }))

      //chunk the csss
      .pipe(plugins.bless({
         suffix: '-'
      }))

      //minify
      .pipe(plugins.postcss([
         csswring()
      ]))

      //post the finsihed content
      .pipe(gulp.dest(`${paths.dist}/assets/css`))
      .pipe(gulp.dest(`${paths.server}/assets/css`));
   };
};