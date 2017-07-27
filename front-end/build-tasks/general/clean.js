/**
 * Clean
 */

'use strict';

module.exports = ( paths, gulp, plugins ) => {

  return ( callback ) => {
    return require('del')([paths.dist, paths.server], callback);
  };
};
