const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {

    entry: './src/index.js',
    output: {
       path: path.resolve(__dirname, 'docs'),
       filename: 'bundle.js'
    },

    devServer: {
        open: true
    },

    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: [ '.js', '.jsx' ]
                },
                use: 'babel-loader' 
            },
            
            {
                test: /\.(s*)css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    performance: {
        hints: process.env.NODE_ENV == 'production' ? 'warning' : false
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './assets/css/styles.css'
        })
    ]

}