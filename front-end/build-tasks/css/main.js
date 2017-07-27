'use strict';
/**
 * Main build for CSS
 */


module.exports = ( paths, gulp, plugins ) => {
   
   const autoprefixer = require('autoprefixer'),
         csswring = require('csswring'),
         mqpacker = require('css-mqpacker'),
         path = require('path');

   //options for sass
   const options = {
      style: 'expanded',
      includePaths: [
         './node_modules/font-awesome/scss'
      ]
   };

   return () => {
      gulp.src(`${paths.app}/assets/scss/*.scss`)
         .pipe(plugins.sourcemaps.init())//produce a sorucemap
         .pipe(plugins.sass(options))//compile the scss
         .on('erro', plugins.sass.logError) //incase something goes wrong

         .pipe(plugins.postcss([
            autoprefixer({
               browsers: ['> 2%', 'IE >= 8', 'iOS >= 7'],
               cascade: false,
               map: true,
               remove: true
            }),
            csswring({
               removeAllComments: true
            }),
            mqpacker({
               sort: true
            })
         ]))

         .pipe(plugins.sourcemaps.write('.'))
         .pipe(gulp.dest(`${paths.dist}/assets/css`))
         .pipe(gulp.dest(`${paths.server}/assets/css`))

         .pipe(plugins.filter('**/*.css'))
         .pipe(plugins.browserSync.stream());//reload the pages
   };
};