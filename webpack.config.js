
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }]
  }
}




