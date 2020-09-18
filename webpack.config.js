const path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    { // this rule will only be used for any vendors
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
      include: [/node_modules/]
    }
    // { MAYBE REQUIRED IF ERRORS APPEAR IN CSS
    //   test: /\.css$/,
    //   loaders: ['to-string-loader', 'css-loader'],
    //   exclude: [/node_modules/] //add this line so we ignore css coming from node_modules
    // }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './server/public'
  }
}
