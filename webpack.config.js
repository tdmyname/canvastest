/**
 * Author：Mr.tan
 * Create Date：2017/5/24
 * Modified By：Mr.tan
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
var path = require("path")
var HtmlWebpackPlugin=require("html-webpack-plugin")
var OpenBrowser=require("open-browser-webpack-plugin")
module.exports = {
    entry:  ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: "file-loader?name=fonts/[hash].[ext]"
            },
            {
                test: /\.(woff|woff2)(\?v=\d\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[hash].[ext]"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]"
            },
            {
                test: /\.(png|jpg)$/,
                use: 'url-loader?limit=25000&name=img/[hash].[ext]'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
                title:"入口"
            }
        ),
        new OpenBrowser({
            url: "http://localhost:8080/"
        })
    ]
}