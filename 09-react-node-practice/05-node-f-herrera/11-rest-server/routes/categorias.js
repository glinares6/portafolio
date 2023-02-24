const { Router } = require("express");
const { check } = require("express-validator");
const {
  crearCategoria,
  obtenerCategorias,
  obtenerCategoria,
  actualizarCategoria,
  borrarCategoria,
} = require("../controllers/categorias");
const { existeCategoria } = require("../helpers/db-validators");

const { validarJWT, validarCampos, tieneRole } = require("../middlewares");

const router = Router();

//* {{url}}/api/categorias

//* obtener todas las categorias -publico
router.get("/", obtenerCategorias);

//  *obtener una categoria por id -publico
router.get(
  "/:id",
  //todo debe tener un helper  existeCategoria ~ _id
  [check("id").custom(existeCategoria), validarCampos],
  obtenerCategoria
);

//* Crea categoria  - privado - cualquier persona con un token valido
router.post(
  "/",
  [
    validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  crearCategoria
);

//* actualizar - privado - cualquiera con token valido
//todo    requiere el nombre ,
router.put(
  "/:id",
  [
    validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  actualizarCategoria
);

//* Borra una categoria - ADMIN
//todo  el id debe ser un id valido de mongo
router.delete(
  "/:id",
  [
    validarJWT,
    check("id", "El id no es valido").isMongoId(),
    tieneRole("ADMIN_ROLE", "VENTAS_ROLE", "OTRO_ROLE"),
    validarCampos,
  ],
  borrarCategoria
);

module.exports = router;
