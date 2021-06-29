//Modulos creados - Modelos
const { Juego } = require("../models/juego");
const { Usuario } = require("../models/usuario");
//Modulos internos
const domain = require("domain");
//Controlador
const JuegoControlador = {};
//-----Funciones-----
//Función para le fecha
function fecha() {
  var utc = new Date();
  utc.setHours(utc.getHours() - 5);
  domain.updated = utc;
  return utc;
}
//Agregar puntaje
JuegoControlador.agregarPuntaje = async (req, res) => {
  //Buscar el usuario
  const usuario = await Usuario.findById(req.usuario._id);
  //Si no existe
  if (!usuario) return res.status(400).send("El usuario no existe");
  //Si existe
  const juego = new Juego({
    idUsuario: usuario._id,
    cantidad: req.body.cantidad,
    promedio: req.body.promedio,
    fecha: fecha(),
  });
  const save = await juego.save();
  res.status(200).send(save);
};
//Mostrar puntaje por fecha
JuegoControlador.listarPuntajes = async (req, res) => {
  //Buscar el usuario
  const usuario = await Usuario.findById(req.usuario._id);
  //Si no existe
  if (!usuario) return res.status(400).send("El usuario no existe");
  //Si existe
  const resultados = await Juego.find({ idUsuario: req.usuario._id }).sort({
    fecha: -1,
  });
  res.status(200).send(resultados);
};
//Mostrar puntaje orden descendente
JuegoControlador.listarPuntajesMayor = async (req, res) => {
  //Buscar el usuario
  const usuario = await Usuario.findById(req.usuario._id);
  //Si no existe
  if (!usuario) return res.status(400).send("El usuario no existe");
  //Si existe
  const resultados = await Juego.find({ idUsuario: req.usuario._id }).sort({
    cantidad: -1,
  });
  res.status(200).send(resultados);
};
//Mostrar puntaje orden ascendente
JuegoControlador.listarPuntajesMenor = async (req, res) => {
  //Buscar el usuario
  const usuario = await Usuario.findById(req.usuario._id);
  //Si no existe
  if (!usuario) return res.status(400).send("El usuario no existe");
  //Si existe
  const resultados = await Juego.find({ idUsuario: req.usuario._id }).sort({
    cantidad: 1,
  });
  res.status(200).send(resultados);
};
//Mostrar puntaje globales descendente
JuegoControlador.listarPuntajesGlobalesMayor = async (req, res) => {
  //Buscar el usuario
  const usuario = await Usuario.findById(req.usuario._id);
  //Si no existe
  if (!usuario) return res.status(400).send("El usuario no existe");
  //Si existe
  const resultados = await Juego.find({}, function (err, juego) {
    Usuario.populate(juego, { path: "idUsuario" }, function (err, juego) {
      res.status(200).send(juego);
    });
  }).sort({ cantidad: -1 });
};
//Mostrar puntaje globales ascendente
JuegoControlador.listarPuntajesGlobalesMenor = async (req, res) => {
  //Buscar el usuario
  const usuario = await Usuario.findById(req.usuario._id);
  //Si no existe
  if (!usuario) return res.status(400).send("El usuario no existe");
  //Si existe
  const resultados = await Juego.find({}, function (err, juego) {
    Usuario.populate(juego, { path: "idUsuario" }, function (err, juego) {
      res.status(200).send(juego);
    });
  }).sort({ cantidad: 1 });
};
//Eliminar puntaje
JuegoControlador.eliminarPuntaje = async (req, res) => {
  //Buscar el usuario
  const usuario = await Usuario.findById(req.usuario._id);
  //Si no existe
  if (!usuario) return res.status(400).send("El usuario no existe");
  //Si existe
  const eliminar = await Juego.findByIdAndDelete(req.params._id);
  //Si no encontro el puntaje
  if (!eliminar) return res.status(400).send("La tarea no existe");
  res.status(200).send({ message: "Actividad Eliminada" });
};
module.exports = JuegoControlador;
