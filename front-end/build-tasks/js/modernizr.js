/**
 * JavaScript (Modernizr build)
 */

'use strict';

module.exports = ( paths, themes, gulp, plugins ) => {

	// Child modules
  var fs = require('fs');
  var modernizr = require('modernizr');

  return ( callback ) => {

		// Custom modernizr build
    modernizr.build({
      'feature-detects': [
        'css/flexbox'
      ],
      'options': [
        'setClasses'
      ]
    }, ( result ) => {
      fs.writeFileSync(`${paths.app}/assets/js/lib/modernizr.js`, `/* eslint-disable */\n${result}`);
      callback();
    });
  };
};
