const path=require("path");
// donde se encuentra nuestro archivo
const basePath = __dirname;
// donde queremos que deje el archivo
const distPath = "dist";

const webpack = require('webpack');

// HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

// CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const { minify } = require("css-minimizer-webpack-plugin/types/minify");


module.exports = {
    // mode = modo de funcionamiento
        mode: "production",
    // entry point = donde empieza nuestra aplicacion
        entry: {
            // app: ["@babel/polyfill","./src/index.js"] //
            app: "./src/index.js",
        },

        module: {
            rules:[
             
                { 
					test: /\.pug$/, 
                    use: [
                        
                        "pug-loader",
                    ],
			},
                  {
                    test: /\.scss$/i,
                    use: [
                        // {
                        //     loader: MiniCssExtractPlugin.loader,
                        //     options:{
                        //         hmr: process.env.NODE_ENV === 'development'
                        //     }
                        // },
                        MiniCssExtractPlugin.loader,
                         "css-loader",
                         "postcss-loader",
                         "sass-loader"

                        ]
                },
                //   {
                //     test: /\.css$/i,
                //     use: [
                //         MiniCssExtractPlugin.loader,
                //         // "style-loader",
                //          "css-loader",
				// 		 "postcss-loader",
                //         ]
                // },
                {
                        test:/\.js/,
                        exclude: /node_modules/,
                        use:[
                            "babel-loader"
                        ],
                    
                },
            ],
        },
        plugins: [

            new HtmlWebpackPlugin({
                // en desarrollo
                // scriptLoading: "blocking",
                filename: './index.html',
                template: './src/index.pug',
				// inject: true,
				// minify: false,
                // title: 'Custom plantilla',
            }),

            new MiniCssExtractPlugin({
                // para cambiar el nombre al archivo
                    filename: "styles.css",
            }),
        ],
            // output point = salida del archivo
            output: {
                path: path.join(basePath,distPath),
               filename: 'bundle.js',

            },
            // en modo desarrollo minifiza el css
        //    optimization: {
        //     minimizer: [new CssMinimizerPlugin()],
        //     // minimize: false,
        //   },
        // devServer: {
        //     static: {
        //       directory: path.join(__dirname, 'dist'),
        //     },
        //     compress: true,
        //     port: 9000,
        //   },
}