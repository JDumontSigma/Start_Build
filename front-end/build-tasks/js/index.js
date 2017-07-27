/**
 * JavaScript
 */

'use strict';

module.exports = ( paths, gulp, plugins ) => {

	// Child modules
  var stream = require('webpack-stream');
  var webpack = require('webpack');
  var named = require('vinyl-named'),
      babel = require('gulp-babel'),
      UglifyJsPlugin = require('uglifyjs-webpack-plugin');

	// Webpack options
  var options = {
    devtool: 'source-map',

    output: {
      chunkFilename: '[name]-[chunkhash].min.js',
      filename: '[name].min.js',
      publicPath: 'assets/js/'
    },
    module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['es2015','es2016','react', 'env']
                }
              }
            }
          ]
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
      new UglifyJsPlugin({
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        uglifyOptions:{
          ecma: 8
        },
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
      .pipe(babel({
        presets: ['es2015', 'es2016', 'react']
      }))
      .pipe(stream(options, webpack))
      .pipe(gulp.dest(`${paths.server}/assets/js`))
			.pipe(gulp.dest(`${paths.dist}/assets/js`));
  };
};
