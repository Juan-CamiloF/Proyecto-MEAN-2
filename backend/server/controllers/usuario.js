//Modulos creados - Modelo
const { Usuario } = require("../models/usuario");
//Controlador
const UsuarioControlador = {};
// -----Funciones-----
//Registrar usuario
UsuarioControlador.registrarUsuario = async (req, res) => {
  //Buscar el correo en la base de datos
  let usuario = await Usuario.findOne({ correo: req.body.correo });
  //Si existe no registrar
  if (usuario) return res.status(400).send("El usuario ya existe");
  //Si existe registrarlo
  usuario = new Usuario({
    nombre: req.body.nombre,
    edad: req.body.edad,
    correo: req.body.correo,
    contrasenia: req.body.contrasenia,
  });
  //Guardar el usuario y generar JWT
  const save = await usuario.save();
  const jwt = usuario.generateJWT();
  res.status(200).send({ jwt });
};
module.exports = UsuarioControlador;
