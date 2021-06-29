//Modulos internos
const mongoose = require("mongoose");

//Modulos creados

const esquemaJuego = new mongoose.Schema({
  idUsuario: String,
  cantidad: Number,
  promedio: Number,
  fecha: Date
});
//Exportar el modelo
const Juego = mongoose.model("juego", esquemaJuego);
module.exports.Juego = Juego;

