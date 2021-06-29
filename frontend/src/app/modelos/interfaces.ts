export interface usuario {
  _id: string;
  nombre: string;
  edad: number;
  correo: string;
  contrasenia: string;
}
export interface puntaje {
  _id: string;
  idUsuario: string;
  cantidad: number;
  promedio: number;
  fecha: Date;
}
export interface puntajeJson{
    cantidad:number,
    promedio:string
}
export interface login {
  jwt: string;
}
export interface puntajeGlobal {
  _id: string;
  idUsuario: IDUsuario;
  cantidad: number;
  promedio: number;
  fecha: Date;
}
export interface IDUsuario {
  _id: string;
  nombre: string;
}
export interface message {
  mensaje: string;
}
