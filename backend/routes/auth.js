//Modulos internos 
const express = require('express');
const router = express.Router();
//Modulos creados
const { Usuario } = require('../models/usuario');
//--Rutas--
//Iniciar sesion
router.post("/", async(request,response)=>{
    //Buscar usuario en BD
    const usuario = await Usuario.findOne({correo: request.body.correo});
    //Si no existe no iniciar sesión
    if(!usuario) return response.status(400).send('Correo o contraseña incorrectos');
    //Si no es correcta la contraseña
    if(usuario.contrasenia !== request.body.contrasenia) return response.status(400).send('Correo o contraseña incorrectos')
    //Si inicia sesión enviar token
    const jwt = usuario.generateJWT();
    response.status(200).send({jwt});
});
module.exports = router;
