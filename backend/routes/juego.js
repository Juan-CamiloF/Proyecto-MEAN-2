//Modulos internos
const express = require("express");
const router = express.Router();
const domain = require("domain");
//Modulos creados
const { Juego } = require("../models/juego");
const { Usuario } = require("../models/usuario");
const auth = require("../middleware/auth");
//--Rutas--
//Agregar puntaje
router.post("/agregarPuntaje", auth, async (request, response) => {
  //Buscar el usuario
  const usuario = await Usuario.findById(request.usuario._id);
  //Si no existe
  if (!usuario) return response.status(400).send("El usuario no existe");
  //Si existe
  const juego = new Juego({
    idUsuario: usuario._id,
    cantidad: request.body.cantidad,
    promedio: request.body.promedio,
    fecha: fecha(),
  });
  const save = await juego.save();
  response.status(200).send(save);
});

//Función para le fecha
function fecha() {
  var utc = new Date();
  utc.setHours(utc.getHours() - 5);
  domain.updated = utc;
  return utc;
}
//Mostrar puntaje por fecha
router.get("/misPuntajes", auth, async (request, response) => {
  //Buscar el usuario
  const usuario = await Usuario.findById(request.usuario._id);
  //Si no existe
  if (!usuario) return response.status(400).send("El usuario no existe");
  //Si existe
  const resultados = await Juego.find({ idUsuario: request.usuario._id }).sort({
    fecha: -1,
  });
  response.status(200).send(resultados);
});
//Mostrar puntaje orden descendente
router.get("/misPuntajes/mayor", auth, async (request, response) => {
  //Buscar el usuario
  const usuario = await Usuario.findById(request.usuario._id);
  //Si no existe
  if (!usuario) return response.status(400).send("El usuario no existe");
  //Si existe
  const resultados = await Juego.find({ idUsuario: request.usuario._id }).sort({
    cantidad: -1,
  });
  response.status(200).send(resultados);
});
//Mostrar puntaje orden ascendente
router.get("/misPuntajes/menor", auth, async (request, response) => {
  //Buscar el usuario
  const usuario = await Usuario.findById(request.usuario._id);
  //Si no existe
  if (!usuario) return response.status(400).send("El usuario no existe");
  //Si existe
  const resultados = await Juego.find({ idUsuario: request.usuario._id }).sort({
    cantidad: 1,
  });
  response.status(200).send(resultados);
});
//Eliminar puntajes
router.delete("/eliminar/:_id",auth,async(request,response)=>{
    //Buscar el usuario 
    const usuario = await Usuario.findById(request.usuario._id);
    //Si no existe
    if(!usuario) return response.status(400).send('El usuario no existe');
    //Si existe
    const eliminar = await Juego.findByIdAndDelete(request.params._id);
    //Si no encontro el puntaje
    if(!eliminar) return response.status(400).send('La tarea no existe');
    response.status(200).send({message:'Actividad Eliminada'})
})

//Mostrar puntajes globales orden dec
router.get("/global/mayor", auth, async (request, response) => {
  //Buscar el usuario
  const usuario = await Usuario.findById(request.usuario._id);
  //Si no existe
  if (!usuario) return response.status(400).send("El usuario no existe");
  //Si existe
  const resultados = await Juego.find({}, function (err, juego) {
    Usuario.populate(juego, { path: "idUsuario" }, function (err, juego) {
      response.status(200).send(juego);
    });
  }).sort({ cantidad: -1 });
});
router.get("/global/menor", auth, async (request, response) => {
  //Buscar el usuario
  const usuario = await Usuario.findById(request.usuario._id);
  //Si no existe
  if (!usuario) return response.status(400).send("El usuario no existe");
  //Si existe
  const resultados = await Juego.find({}, function (err, juego) {
    Usuario.populate(juego, { path: "idUsuario" }, function (err, juego) {
      response.status(200).send(juego);
    });
  }).sort({cantidad:1});
});
//Exportar
module.exports = router;
