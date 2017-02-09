import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'eval',
      entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/index',
    ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new HtmlWebpackPlugin({ // Create HTML file that includes references to bundled CSS and JS.
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            inject: true
        })
  ],
  module: {
        loaders: [
            { test: /\.json$/, loader: 'json' },
            { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader'] },
            { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=image/svg+xml' },
            { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]' },
            { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
            { test: /(\.css|\.scss)$/, loaders: ["style-loader", "css-loader", "sass-loader"] }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './src'
    }
};
