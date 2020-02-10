const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    background: path.join(__dirname, '../src/background.ts'),
    'content-script': path.join(__dirname, '../src/content-script.ts'),
    options: path.join(__dirname, '../src/options.ts'),
  },
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CopyPlugin([
      { from: '.', to: '../' },
    ],
    { context: 'public' }),
    new CleanWebpackPlugin(),
  ],
};
