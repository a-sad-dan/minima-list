const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  plugins: [

    new HtmlWebpackPlugin({

      title: 'Minima-List',
      template: './src/index.html',
      favicon: path.resolve(__dirname, './src/assets', 'MinimaListLogo.svg'),
    }),

  ],

  module: {

    rules: [

      {
        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },
    ],

  },
};
