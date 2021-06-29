//Modulos internos
const express = require("express");
const cors = require("cors");

//Modulos creados
const usuario = require("./routes/usuario");
const auth = require("./routes/auth");
const juego = require("./routes/juego");
//Crear la app
const app = express();

//Configuraciones
app.use(cors());
app.use(express.json());
//Rutas
app.use("/api/registro", usuario);
app.use("/api/iniciar",auth);
app.use("/api/juego",juego)
//Base de datos
const { mongoose } = require('./database');
//El puerto para la app
const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log("Se esta ejecutando en el puerto: ",puerto);
});


