
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, './client/dist'),
    publicPath: 'http://localhost:5000/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
          'url?limit=8192',
          'img'
      ]
    }]
  }
}
