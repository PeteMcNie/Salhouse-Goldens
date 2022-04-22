const path = require('path')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './client/index.js'
  },
  //   plugins: [
  //     // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
  //     new CleanWebpackPlugin(),
  //     new HtmlWebpackPlugin({
  //       title: 'Production'
  //     })
  //   ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [/node_modules/]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../server/public')
  }
}
