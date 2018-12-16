/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  entry: ['babel-polyfill' ,'./lib/Components/index.js'],
  output: {
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/,exclude:/node_modules/ , use: 'babel-loader' }
    ]
  }
};

