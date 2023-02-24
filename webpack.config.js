const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports={
    mode: "development",
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundel.js',
        clean: true,
        assetModuleFilename: 'images/[name][ext]'
    },
    devServer:{
        static:{
            directory:path.resolve(__dirname,'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback:true
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader'
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),
    ],
    resolve:{
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    }


}