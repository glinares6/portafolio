const { response } = require("express");
const { subirArchivo } = require("../helpers");

const cargarArchivo = async (req, res = response) => {
  // let sampleFile;
  // let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
    // res.status(400).send("No hay archivos que subir");
    res.status(400).json("No hay archivos que subir");
    return;
  }
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

module.exports = {
  cargarArchivo,
};
