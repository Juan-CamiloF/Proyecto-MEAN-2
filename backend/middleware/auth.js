//Modulos internos
const jwt = require('jsonwebtoken');
//Funcion para la seguridad en el juego
function auth(request,response,next) {
    //Traer el token de la autorizacion
    let jwtoken = request.header("Authorization");
    //Separar el bearer del token
    jwtoken = jwtoken.split(' ')[1];
    //Si no hay ningun token guardado
    if(!jwtoken) return response.status(405).send('No hay token para acceso');
    //Si existe verificar el token
    try {
        const payload = jwt.verify(jwtoken,"clave");
        request.usuario = payload;
        next();
    } catch (err) {
        response.status(405).send('Token invalido',err);
    }
}
//Exportar la funcion
module.exports = auth