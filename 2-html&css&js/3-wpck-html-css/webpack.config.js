const path=require("path");
// donde se encuentra nuestro archivo
const basePath = __dirname;
// donde queremos que deje el archivo
const distPath = "dist";

// HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

// CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    // mode = modo de funcionamiento
        mode: "production",
    // entry point = donde empieza nuestra aplicacion
        entry: {
            app: "./src/index.js",
        },

        module: {
            rules:[
                {
                        test:/\.js/,
                        exclude: /node_modules/,
                        use:["babel-loader"],
                    
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                minify: true,
                scriptLoading: "blocking",
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
           optimization: {
            minimizer: [new CssMinimizerPlugin()],
            minimize: true,
          },
}