const { response, request } = require("express");

//todo nos traemos el response para mostrar las funciones que tiene express

const usuariosGet = (req = request, res = response) => {
  //*objeto query implicito
  //*   const query = req.query;

  //* desestructuramos el query
  const { q, nombre = "no name", apikey, page = 1, limit } = req.query;
  // ok: true,
  //* res.status(403).json({
  res.json({
    msg: "get API - usuariosGet desde el portafolio raiz",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPost = (req, res) => {
  //*objeto implicito
  //*  const { nombre, age } = req.body;

  //*desestructuramos el objeto
  const { nombre, age } = req.body;

  // ok: true,
  // * res.status(201).json({
  res.json({
    //   res.json({
    msg: "post API - usuariosPost",
    nombre,
    age,
  });
};

const usuariosPut = (req, res) => {
  const { id } = req.params;
  // ok: true,
  //* res.status(403).json({
  res.status(500).json({
    msg: "put API - usuariosPut",
    id,
  });
};

const usuariosPatch = (req, res) => {
  // ok: true,
  //* res.status(403).json({
  res.json({
    msg: "patch API - usuariosPatch",
  });
};

const usuariosDelete = (req, res) => {
  // ok: true,
  //* res.status(403).json({
  res.json({
    msg: "delete API - usuariosDelete",
  });
};

const usuariosGetSend = (req, res) => {
  res.send("ingresando al node - usuariosGetSend");
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
  usuariosGetSend,
};
