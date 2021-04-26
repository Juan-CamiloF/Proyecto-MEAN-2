//Modulos internos
const express = require("express");
const router = express.Router();
//Modulos creados
const { Usuario } = require("../models/usuario");
//--Rutas--
//Crear el registro
router.post("/", async (request, response) => {
  //Buscar el correo en la base de datos
  let usuario = await Usuario.findOne({ correo: request.body.correo });
  //Si existe no registrar
  if (usuario) return response.status(400).send("El usuario ya existe");
  //Si existe registrarlo
  usuario = new Usuario({
    nombre: request.body.nombre,
    edad: request.body.edad,
    correo: request.body.correo,
    contrasenia: request.body.contrasenia,
  });
  //Guardar el usuario y generar JWT
  const save = await usuario.save();
  const jwt = usuario.generateJWT();
  response.status(200).send({jwt});
});

module.exports = router