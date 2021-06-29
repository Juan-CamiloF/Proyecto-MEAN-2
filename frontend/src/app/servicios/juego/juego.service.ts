import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { message, puntaje, puntajeGlobal, puntajeJson } from 'src/app/modelos/interfaces';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  //Endpoints
  private puntajeUrl = 'http://localhost:3000/api/juego/agregarPuntaje';
  private ListarPUrl = 'http://localhost:3000/api/juego/misPuntajes';
  private ListarASCPUrl = 'http://localhost:3000/api/juego/misPuntajes/mayor';
  private ListarDESUrl = 'http://localhost:3000/api/juego/misPuntajes/menor';
  private ListarGlobalAscUrl = 'http://localhost:3000/api/juego/global/mayor';
  private ListarGlobalDesUrl = 'http://localhost:3000/api/juego/global/menor';
  private EliminarURL = 'http://localhost:3000/api/juego/eliminar';
  constructor(private http:HttpClient) { }

  puntaje(puntaje:puntajeJson){
    return this.http.post<puntaje>(this.puntajeUrl,puntaje); 
  }
  listar(){
    return this.http.get<puntaje[]>(this.ListarPUrl);
  }
  listarASC(){
    return this.http.get<puntaje[]>(this.ListarASCPUrl);
  }
  listarDEC(){
    return this.http.get<puntaje[]>(this.ListarDESUrl);
  }
  listarGlobalAsc(){
    return this.http.get<puntajeGlobal[]>(this.ListarGlobalAscUrl);
  }
  listarGlobalDes(){
    return this.http.get<puntajeGlobal[]>(this.ListarGlobalDesUrl);
  }
  eliminarPuntaje(puntaje:puntaje){
    const _id = puntaje._id;
    const url = `${this.EliminarURL}/${_id}`
    return this.http.delete<message>(url);
  }
}
