/**
 * Serve
 */

'use strict';

module.exports = ( paths, gulp, plugins ) => {

  return () => {
    return plugins.browserSync.init({
      reloadOnRestart: true,

      server: {
        baseDir: paths.dist,
        directory: true
      }
    });
  };
};
