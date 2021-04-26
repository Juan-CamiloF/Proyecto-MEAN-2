//Modulos internos
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//Modulos creados
const usuario = require("./routes/usuario");
const auth = require("./routes/auth");
const juego = require("./routes/juego");
//Crear la app
const app = express();

//Decirle a la app que va a usar
app.use(cors());
app.use(express.json());
app.use("/api/registro", usuario);
app.use("/api/iniciar",auth);
app.use("/api/juego",juego)

//El puerto para la app
const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log("Se esta ejecutando en el puerto: ",puerto);
});

//Indicarle como guardar los datos a mongo

mongoose
  .connect("mongodb://localhost/proyecto2", {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Base de datos funcionando");
  })
  .catch((err) => {
    console.log("Hubo un problema: ", err);
  });
