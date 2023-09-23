const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry:"index.js",
    output:{
        path: path.join(__dirname,"../dist"),
        // eslint-disable-next-line no-restricted-globals
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
                // eslint-disable-next-line no-undef
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