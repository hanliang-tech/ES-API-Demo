const fs                = require('fs');
const path              = require('path');
const webpack           = require('webpack');
const VueLoaderPlugin   = require('vue-loader/lib/plugin');
const pkg               = require('../package.json');
const WPWatchPlugin     = require('./webpack_watch');
module.exports = {
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 1500,
  },
  entry: {
    index: path.resolve(pkg.nativeMain),
  },
  output: {
    filename: 'index.bundle',
    strictModuleExceptionHandling: true,
    path: path.resolve('./dist/dev/'),
  },
  plugins: [
    new VueLoaderPlugin(),
    new WPWatchPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        HOST: JSON.stringify(process.env.DEV_HOST || '127.0.0.1'),
        PORT: JSON.stringify(process.env.DEV_PORT || 38989),
      },
      __PLATFORM__: null,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader',
          'unicode-loader',
        ],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [[
                '@babel/preset-env',
                {
                  targets: {
                    chrome: 57,
                    ios: 9,
                  },
                },
              ]],
              plugins: [
                '@babel/plugin-proposal-class-properties',
              ],
            },
          },
          'unicode-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          '@hippy4tv/vue-css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/',
          },
        }],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [path.resolve(__dirname, '../node_modules')],
    alias: (() => {
      const aliases = {
        vue: '@hippy4tv/vue',
        '@': path.resolve('./src'),
        'vue-router': '@hippy4tv/vue-router',
      };

      return aliases;
    })(),
  },
};
