const { response, request } = require("express");
const Usuario = require("../models/usuario");

const bcryptjs = require("bcryptjs");
const { findByIdAndDelete } = require("../models/usuario");

//todo nos traemos el response para mostrar las funciones que tiene express

const usuariosGet = async (req = request, res = response) => {
  //*objeto query implicito
  //*   const query = req.query;

  //* desestructuramos el query
  // const { q, nombre = "no name", apikey, page = 1, limit } = req.query;

  const { limite = 5, desde = 0 } = req.query;
  const query = { estado: true };

  // ok: true,

  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments(query),
    Usuario.find(query).skip(Number(desde)).limit(Number(limite)),
  ]);

  //* res.status(403).json({
  res.json({
    // msg: "get API - usuariosGet",
    total,
    usuarios,

    // q,
    // nombre,
    // apikey,
    // page,
    // limit,
  });
};

const usuariosPost = async (req, res = response) => {
  //*objeto implicito
  //*  const { nombre, age } = req.body;

  //*desestructuramos el objeto
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  //* verificar si el correo existe

  //*êncriptar la contraseña
  const solt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, solt);

  await usuario.save();
  //* delete usuario.password;

  // ok: true,
  // * res.status(201).json({
  res.json(
    usuario
    //   res.json({
    // msg: "post API - usuariosPost",
  );
};

const usuariosPut = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, google, correo, ...resto } = req.body;

  //todo validar contra base de datos
  if (password) {
    //* validar contraseña
    const solt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, solt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto);
  // ok: true,
  //* res.status(403).json({
  res.json({
    msg: "put API - usuariosPut",
    usuario,
  });
};

const usuariosPatch = (req, res) => {
  // ok: true,
  //* res.status(403).json({
  res.json({
    msg: "patch API - usuariosPatch",
  });
};

const usuariosDelete = async (req, res) => {
  const { id } = req.params;

  //todo fisicamente lo barramos
  //* const usuario = await Usuario.findByIdAndDelete(id);

  //*eliminación logica
  const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });

  // ok: true,
  //* res.status(403).json({
  res.json({
    // msg: "delete API - usuariosDelete",
    usuario,
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
