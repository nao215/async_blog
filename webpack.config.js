const path = require('path');

module.exports = {

  entry: {
    javascript: './app/assets/javascripts/components/Main.jsx',
  },

  output: {
    path: path.join(__dirname, '/public/javascripts'),
    filename: 'app.js',
  },

  devServer: {
    contentBase: 'public',
    port: 3000,
  },

  module: {

    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },

      {
        test: /\.css$/,
        loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[path][name]-[local]-[hash:base64:5]'],
      },
    ],
  },
};
