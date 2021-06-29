//Modulos internos
const express = require("express");
const router = express.Router();
//Modulos creados - Controlador
const Usuario = require("../controllers/auth");
//Rutas
router.post("/", Usuario.autenticar);
//Exportar rutas
module.exports = router;
