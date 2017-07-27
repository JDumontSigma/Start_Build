/**
 * JavaScript
 */

'use strict';

module.exports = ( paths, gulp, plugins ) => {

	// Child modules
  var stream = require('webpack-stream');
  var webpack = require('webpack');
  var named = require('vinyl-named');

	// Webpack options
  var options = {
    devtool: 'source-map',

    output: {
      chunkFilename: '[name]-[chunkhash].min.js',
      filename: '[name].min.js',
      publicPath: 'assets/js/'
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': 'production'
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false
        },
        sourceMap: true
      })
    ]
  };

  return () => {

		// Process entry point
    return gulp.src(`${paths.app}/assets/js/*.js`)
			.pipe(named())
      .pipe(stream(options, webpack))
      .pipe(gulp.dest(`${paths.server}/assets/js`))
			.pipe(gulp.dest(`${paths.dist}/assets/js`));
  };
};
