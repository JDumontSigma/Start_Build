/**
 * Aria checker
 */

'use strict';

module.exports = (paths, gulp, plugins) => {
  let AriaLinter = require('gulp-arialinter');
  return function (callback) {
    return gulp.src('dist/**/*.html')
               .pipe(AriaLinter({
                 level: 'AA'
               }));
  };
};
