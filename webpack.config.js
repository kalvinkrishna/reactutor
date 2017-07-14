var isProd = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var boostrapEntryPoints = require('./webpack.bootstrap.config');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var SRC_DIR = path.resolve(__dirname,"js");

var boostrapConfig = isProd? boostrapEntryPoints.prod : boostrapEntryPoints.dev

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  devtool: isProd ? "inline-sourcemap" : false,
  entry: {
    app:"./src/index.js",
    boostrap: boostrapConfig
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "js/[name].bundle-[hash].js",
    publicPath:"/"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module:{
    rules:[
      
      {
        test:/\.scss$/,
        
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader","sass-loader"]
        })
      },
      {
        test:/\.css$/,
        
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader","sass-loader"]
        })
      },
      {
        test:/\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['env','react','es2015','stage-2']
            }
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use:'file-loader?name=[hash:6].[ext]&outputPath=images/'
      },
      { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' },
      { test: /\.(ttf|eot)$/, loader: 'file-loader?name=fonts/[name].[ext]' },
      { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' }
    ]
  },

  devServer:{
    contentBase : path.join(__dirname,'public'),
    inline:true,
  },
  
  plugins: isProd ? [
    new HtmlWebpackPlugin({
       title :'Project Demo',
       // minify:{
       //    collapseWhitespace:true //for minify html
       // },
      // hash:true,
       filename: '../public/index.html',
       template: './src/kalvin.ejs'
    }),
    new HtmlWebpackPlugin({
       title : 'kalvin',
       filename: '../html/kalvin.html',
       template:'./src/kalvin.ejs'
    }),
    new ExtractTextPlugin(
      {
        filename:"css/[name].css",
        disable: !isProd,
        allChunks: true
      }
    ),
  ] 
  : 
  [
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, comments: false, minimize: true }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
};