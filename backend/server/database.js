//Modulos internos
const mongoose = require("mongoose");
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
module.exports = mongoose;