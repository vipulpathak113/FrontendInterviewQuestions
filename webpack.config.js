const webpack = require('webpack');
const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry:"index.js",
    output:{
        path: path.join(__dirname,"../dist"),
        filename:[name].js
    },
    mode:"production",
    devtool:"eval-source-map",
    module:{
        rules:[
            {
                use:'babel-loader',
                test:/\.js/,
                options: {
                    presets: ['@babel/preset-env']
                  },
                exclude:node_modules
            },
            {
                use:['style-loader','css-loader'],
                test:/\.css/,

            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin()
    ]
}