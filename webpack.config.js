const webpack = require('webpack')
const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HTML_OPTIONS = {
    template: "../public/index.html"
}

const sourcePath = path.join(__dirname, './src')
const outPath = path.join(__dirname, './dist')

module.exports = {
    context: sourcePath,
    entry: {
        main: './index.tsx'
    },
    output: {
        path: outPath,
        filename: 'bundle.js',
        chunkFilename: '[chunkhash].js',
        publicPath: '/'
    },
    target: 'web',
    resolve: {
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
        alias: {
            'app': path.resolve(__dirname, 'src/app/')
        },
        modules: [
            path.resolve(__dirname, './node_modules')
        ],
        plugins: [new TsconfigPathsPlugin({configFile: __dirname + "/tsconfig.json"})]
    },
    module: {
        rules: [
            // .ts, .tsx
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            },
            {
                test: /\.(less)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            // static assets
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    limit: 10000
                }
            },
            {test: /\.jpg$/, use: 'file-loader'}
        ]
    },
    optimization: {
        splitChunks: {
            name: true,
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: -10
                }
            }
        },
        runtimeChunk: true
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(HTML_OPTIONS)
    ],
    mode: 'development',
    devtool: "source-map",
    devServer: {
        port: 3001,
        contentBase: sourcePath,
        hot: true,
        inline: true,
        historyApiFallback: true,
        compress: true
    }
}