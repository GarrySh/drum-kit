import autoprefixer from 'autoprefixer';
import path from 'path';
import precss from 'precss';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default () => ({
  entry: {
    app: ['./app/scripts/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    // publicPath: '/app/',
  },
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    contentBase: './app/public',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: './app/public',
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [precss, autoprefixer],
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(styl|stylus)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [precss, autoprefixer],
            },
          },
          {
            loader: 'stylus-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({ template: './app/pages/index.pug', inject: false }),
  ],
});
