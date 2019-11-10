const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

var config = {
   context: __dirname,
   entry: './src/app/index.js',
   output: {
      path: path.resolve( __dirname, 'app_dist'),
      filename: 'bundle.js',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true,
      port: 3000
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_module/,
            use: 'babel-loader',
         },
         {test: /\.css$/, use: ['style-loader', 'css-loader']},
         {test: /\.(png|j?g|svg|gif)?$/, use: 'file-loader'},
         {test: /\.scss/, use: 'style-loader!css-loader!sass-loader'},
         {test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: 'url-loader?limit=65000'}
      ]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html'
      })
   ]
};

module.exports = config;