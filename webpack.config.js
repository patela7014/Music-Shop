var path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    watch: true,
    module:{
        loaders: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015',
                        'stage-1']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/, loader: "style-loader!css-loader" },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ]
    }
}