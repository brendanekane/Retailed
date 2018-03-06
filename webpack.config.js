var path = require('path');

module.exports = {
  entry: './frontend/retailed.jsx',
  output: {
    path: path.resolve(__dirname, 'app/assets/javascripts'),
    filename: './bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
    modules: [path.resolve(__dirname, 'frontend'), 'node_modules']
  }
};
