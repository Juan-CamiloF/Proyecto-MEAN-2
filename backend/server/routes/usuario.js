//Modulos internos
const express = require("express");
const router = express.Router();
//Modulos creados - Controlador
const Usuario = require("../controllers/usuario");
//Rutas
router.post("/", Usuario.registrarUsuario);
//Exportar rutas
module.exports = router;
