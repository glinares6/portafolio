const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-camppos");
const {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId,
} = require("../helpers/db_validators");

const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
  usuariosGetSend,
} = require("../controllers/usuarios.controllers");

const router = Router();

router.get("/", usuariosGet);

router.put(
  "/:id",
  [
    check("id", "No es un id valido").isMongoId(),
    validarCampos,
    check("id").custom(existeUsuarioPorId),
    check("rol").custom(esRoleValido),
    validarCampos,
  ],
  usuariosPut
);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio ").not().isEmpty(),
    check("password", "El password debe ser más de 6 letras ").isLength({
      min: 6,
    }),
    check("correo", "el correo no es valido ").isEmail(),
    check("correo").custom(emailExiste),
    //* validación isIn
    // check("rol", "No es un rol permitido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    check("rol").custom(esRoleValido),
    validarCampos,
  ],
  usuariosPost
);

router.delete(
  "/:id",
  [
    check("id", "No es un id valido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    validarCampos,
  ],
  usuariosDelete
);

router.patch("/", usuariosPatch);

router.get("/api2", usuariosGetSend);

module.exports = router;
