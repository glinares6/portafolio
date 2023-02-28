const { response } = require("express");
const { subirArchivo } = require("../helpers");

const { Usuario, Producto } = require("../models");
const cargarArchivo = async (req, res = response) => {
  // let sampleFile;
  // let uploadPath;

  //*enviado al middleware validar-archivo
  // if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
  //   // res.status(400).send("No hay archivos que subir");
  //   res.status(400).json({ msg: "No hay archivos que subir" });
  //   return;
  // }

  //   console.log("req.files >>>", req.files); // eslint-disable-line

  //txt md

  //todo se agrega el try-catch ya que no controla la excepción - promise(reject) ~ el resolve pasa normal
  try {
    //Imagenes
    // const nombre = await subirArchivo(req.files, ["txt", "md"], "textos");
    const nombre = await subirArchivo(req.files, undefined, "imgs");

    res.json({
      nombre: nombre,
    });
  } catch (msg) {
    res.status(400).json({ msg });
  }
};

const actualizarImagen = async (req, res = response) => {
  //*Ç enviado al middleware validar-archivo
  // if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
  //   res.status(400).json({ msg: "No hay archivos que subir" });
  //   return;
  // }

  const { id, coleccion } = req.params;

  let modelo;

  switch (coleccion) {
    case "usuarios":
      modelo = await Usuario.findById(id);
      if (!modelo) {
        return res.status(400).json({
          msg: `No existe un usuario con el id ${id}`,
        });
      }
      break;
    case "productos":
      modelo = await Producto.findById(id);
      if (!modelo) {
        return res.status(400).json({
          msg: `No existe un producto con el id ${id}`,
        });
      }
      break;
    default:
      return res.status(500).json({ msg: "Se me olvidó validar esto " });
  }

  const nombre = await subirArchivo(req.files, undefined, coleccion);
  modelo.img = nombre;

  await modelo.save();
  res.json(modelo);
};
module.exports = {
  cargarArchivo,
  actualizarImagen,
};

//todo si no se envia el archivo se queda pegado como revolverlo ~ tarea
