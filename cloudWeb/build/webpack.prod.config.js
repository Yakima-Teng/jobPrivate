const path = require("path")
const webpack = require("webpack")
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const PrerenderSpaPlugin = require('prerender-spa-plugin')

const baseWebpackConfig = require("./webpack.base.config")
module.exports = merge(baseWebpackConfig, {
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                    options: {
                        loaders: {
                            css: ExtractTextPlugin.extract({
                                use: ["css-loader", "postcss-loader"],
                                publicPath: '../',
                            }),
                            stylus: ExtractTextPlugin.extract({
                                use: [
                                    "css-loader",
                                    "postcss-loader",
                                    "stylus-loader"
                                ],
                                publicPath: '../',
                            }),
                            sass: ExtractTextPlugin.extract({
                                use: [
                                    "css-loader",
                                    "postcss-loader",
                                    "sass-loader"
                                ],
                                publicPath: '../',
                            })
                        }
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "postcss-loader"]
                })
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "postcss-loader", "stylus-loader"]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "postcss-loader", "sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        //配置 prerender-spa-plugin
        // new PrerenderSpaPlugin(
        //     // 生成文件的路径，此处与webpack打包地址一致
        //     path.join(path.join(__dirname, "../dist")),
        //     // 配置要做预渲染的路由，只支持h5 history方式
        //     ['/', '/index', '/search', '/channel_140', '/channel_149', '/channel_174', '/channel_172', '/channel_175', '/channel_173', '/channel_150', '/sbfw', '/zlfw', '/bqfw', '/gjfw', '/qyfw', '/flfw', '/sjfw', '/news', '/about', '/about/team', '/about/events', '/about/concatus', '/about/cooperats'],
        // {
        //     //在一定时间后再捕获页面信息，使得页面数据信息加载完成
        //     captureAfterTime: 50000,
        //     //忽略打包错误
        //     ignoreJSErrors: true,
        //     phantomOptions: '--web-security=false',
        //     maxAttempts: 10,
        // }
        // ),
        new webpack.optimize.UglifyJsPlugin({
            //删除console.log
                compress: {
                    warnings: false,
                    drop_debugger: true,
                    drop_console: true
                }
            }),
        // 提取css
        new ExtractTextPlugin({
            allChunks: true,
            filename: "css/style.css?[contenthash:8]"
        }),
        // 1、压缩CSS
        new OptimizeCSSPlugin({
            // assetNameRegExp: /\.optimize\.css$/g,
            // cssProcessor: require('cssnano'),
            // cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
            // canPrint: true
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: { removeAll: true },
                // 避免 cssnano 重新计算 z-index
                safe: true
            },
            canPrint: false
        }),
        //2、压缩JS
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false
                }
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module, count) {
                return module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            chunks: ['manifest', 'vendor', 'app']
        })
    ]
})