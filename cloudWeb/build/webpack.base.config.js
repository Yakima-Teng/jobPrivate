const path = require("path")
const webpack = require("webpack")

function resolve(relPath) {
    return path.resolve(__dirname, relPath)
}
module.exports = {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "js/[name].js",
        chunkFilename: "js/[name].[chunkhash].js",
        publicPath: "/"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.scss$/,
                loader: "vue-style-loader!css-loader!sass-loader"
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                include: [resolve("../src")]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: "images/[name].[hash:7].[ext]",
                        publicPath:"/"
                    }
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: "fonts/[name].[hash:7].[ext]"
                    }
                }]
            }
        ]
    }
}