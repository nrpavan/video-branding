var webpack = require("webpack");
var path = require("path");
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
var pkg = require('./package.json');
 
var DIST_DIR = path.resolve(__dirname,"app_dist");
var SRC_DIR = path.resolve(__dirname,"src");
 
var config = {
    context: path.join(__dirname, "src/app"),
    devtool: 'eval-source-map',
    cache: false,
    devServer: {
        historyApiFallback: true,
        inline: true,
        contentBase: DIST_DIR,
        port: 3000
    },
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/js",
        filename: "bundle.js",
        publicPath: "/js/",
        sourceMapFilename: '[file].map'
    },
    module: {
        rules: [
           { test: /\.js$/, include: SRC_DIR, exclude: /node_module/, use: 'babel-loader' },
           { test: /\.css$/, use: ['style-loader', 'css-loader'] },
           { test: /\.(png|j?g|svg|gif)?$/, use: 'file-loader' },
           { test: /\.json$/, loaders: ['json'] }
        ]
     },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve( __dirname, 'public/index.html' ),
            filename: 'index.html'
         }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};

module.exports= config;