const path = require('path');
const webpack = require('webpack');

module.exports = {

  entry: {
		javascript: './app/assets/javascripts/main.jsx'
	},

  output: {
		path: path.join(__dirname, '/public/javascripts'),
		filename: 'app.js'
	},

  devServer: {
    contentBase: 'public',
    port: 3000
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
