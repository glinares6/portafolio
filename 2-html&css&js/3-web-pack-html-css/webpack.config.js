const path=require("path");
// donde se encuentra nuestro archivo
const basePath = __dirname;
// donde queremos que deje el archivo
const distPath = "dist";

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
            ],
        },
    // output point = salida del archivo
        output: {
             path: path.join(basePath,distPath),
            filename: 'bundle.js',
        }    
}