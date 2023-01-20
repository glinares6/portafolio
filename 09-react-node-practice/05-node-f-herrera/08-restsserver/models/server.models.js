const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config.db");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    //* conectar a base de datos
    this.conectarDB();

    //*fmiddleware
    this.middleware();

    //* rutas de aplicación
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middleware() {
    //* CORS
    this.app.use(cors());

    //* lectura y  parseo  del body
    this.app.use(express.json());

    //* directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("express corriendo en puerto " + this.port);
    });
  }
}

module.exports = Server;
