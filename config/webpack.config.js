const path = require('path');
const glob = require('glob');
const webpack = require('webpack');

const SRC_PATH = path.resolve(__dirname, '../src');
const PUBLIC_PATH = path.resolve(__dirname, '../public');

const entries = {};

glob
  .sync('**/main*.js', {
    cwd: SRC_PATH,
    ignore: '**/_*.js',
  })
  .map(function(key) {
    entries[key] = path.resolve(SRC_PATH, key);
  });

console.log(entries);

module.exports = {
  entry: entries,

  output: {
    filename: '[name]',
    path: PUBLIC_PATH + '/assets/js/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: 3,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.glsl$/,
        use: {
          loader: 'webpack-glsl-loader',
        },
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor.js',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },

  plugins: [
    new webpack.ProvidePlugin({
      THREE: 'three'
    }),
  ],
};
