//Modulos internos
const express = require("express");
const router = express.Router();
//Modulos creados - Controladores y Middleware
const Juego = require("../controllers/juego");
const auth = require("../middleware/auth");
// -----Funciones-----
router.post("/agregarPuntaje", auth, Juego.agregarPuntaje);
router.get("/misPuntajes", auth, Juego.listarPuntajes);
router.get("/misPuntajes/mayor", auth, Juego.listarPuntajesMayor);
router.get("/misPuntajes/menor", auth, Juego.listarPuntajesMenor);
router.get("/global/mayor", auth, Juego.listarPuntajesGlobalesMayor);
router.get("/global/menor", auth, Juego.listarPuntajesGlobalesMenor);
router.delete("/eliminar/:_id", auth, Juego.eliminarPuntaje);
//Exportar rutas
module.exports = router;