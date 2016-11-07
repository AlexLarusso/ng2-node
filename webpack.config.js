'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['reflect-metadata', 'zone.js'],
    app: './app/main.ts'
  },
  output: {
    path: './app/dist',
    filename: '[name]-bundle.js'
  },
  watch: NODE_ENV === 'development',
  devtool: NODE_ENV ? 'cheap-inline-module-source-map' : null,
  module: {
    loaders: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015!ts-loader'
    }]
  },
  resolve: {
    root: __dirname,
    extensions: ['','.ts','.js','.json'],
    alias: {
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],
}