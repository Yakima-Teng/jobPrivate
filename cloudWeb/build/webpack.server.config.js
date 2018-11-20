const webpack = require("webpack")
const merge = require("webpack-merge")
const baseWebpackConfig = require("./webpack.base.config")
const nodeExternals = require("webpack-node-externals")
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(baseWebpackConfig, {
    entry: './src/entry.server.js',
    target: 'node',
    devtool: 'source-map',
    output: {
        libraryTarget: 'commonjs2',
        filename: 'server-bundle.js'
    },
    externals: nodeExternals({
        whitelist: /\.css$/
    }),
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || 'development'),
            "process.env.VUE_ENV": '"server"'
        }),
        // 生成 vue-ssr-server-bundle.json
        new VueSSRServerPlugin()
    ]
})