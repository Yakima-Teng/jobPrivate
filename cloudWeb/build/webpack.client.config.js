const webpack = require("webpack")
const merge = require("webpack-merge")
const baseWebpackConfig = require("./webpack.base.config")
    // const nodeExternals = require("webpack-node-externals")
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(baseWebpackConfig, {
    entry: './src/entry.client.js',
    target: 'web',
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || 'development'),
            "process.env.VUE_ENV": '"client"'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vender',
            minChunks: 2
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
        // 生成 vue-ssr-client-manifest.json
        new VueSSRClientPlugin()
    ]
})