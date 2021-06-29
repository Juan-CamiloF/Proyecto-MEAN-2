//Modulos internos - Modelo
const { Usuario } = require("../models/usuario");
//Controlador
const UsuarioControlador = {};
// -----Funciones-----
//Autenticar
UsuarioControlador.autenticar = async (req, res) => {
  //Buscar usuario en BD
  const usuario = await Usuario.findOne({ correo: req.body.correo });
  //Si no existe no iniciar sesión
  if (!usuario) return res.status(400).send("Correo o contraseña incorrectos");
  //Si no es correcta la contraseña
  if (usuario.contrasenia !== req.body.contrasenia)
    return res.status(400).send("Correo o contraseña incorrectos");
  //Si inicia sesión enviar token
  const jwt = usuario.generateJWT();
  res.status(200).send({ jwt });
};
module.exports = UsuarioControlador;