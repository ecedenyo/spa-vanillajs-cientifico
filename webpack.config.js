const path = require("path"); // este 'path' incluido es propio de node, y nos permite movernos en las carpetas sin importar donde este
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// configuracion (objeto) de lo que va a suceder
module.exports = {
  entry: "./src/index.js", // punto de entrada
  output: {
    // donde ira el codigo ya compilado listo para prod
    path: path.resolve(__dirname, "dist"), // donde estara
    filename: "main.js", // como se llamara el archivo que se generara al compilarse
  },
  resolve: {
    extensions: [".js"], // extensiones con que trabajara el proyecto
  },
  module: {
    rules: [
      // reglas
      {
        test: /\.js?$/, // estructura de babel, identificado mediante un test con regex
        exclude: /node_modules/, // excluir...
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    // identificar plugins, mediante un objeto, que se utilizaran
    new HtmlWebpackPlugin(
      // ... este lo instanciamos arriba
      {
        inject: true, // como se inyectara un valor
        template: "./public/index.html", // donde se encontrara el template principal / base
        filename: "./index.html", // especificar hacia donde se tiene que guardar
      }
    ),
    new CopyWebpackPlugin([
      {
        from: "./src/styles/styles.css",
        to: "",
      },
    ]),
  ],
};
