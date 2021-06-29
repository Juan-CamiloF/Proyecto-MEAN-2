//Modulos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Crear el modelo de la base de datos

const esquemaUsuario = new mongoose.Schema({
  nombre: String,
  edad: String,
  correo: String,
  contrasenia: String,
});

//Crear el JsonWebToken
esquemaUsuario.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      nombre: this.nombre,
      correo: this.correo,
    },
    "clave"
  );
};

//Crear los exports
const Usuario = mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario = Usuario;
