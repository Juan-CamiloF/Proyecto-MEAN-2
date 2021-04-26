import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  //Url
  private puntajeUrl = 'http://localhost:3000/api/juego/agregarPuntaje';
  private ListarPUrl = 'http://localhost:3000/api/juego/misPuntajes';
  private ListarASCPUrl = 'http://localhost:3000/api/juego/misPuntajes/mayor';
  private ListarDESUrl = 'http://localhost:3000/api/juego/misPuntajes/menor';
  private ListarGlobalAscUrl = 'http://localhost:3000/api/juego/global/mayor';
  private ListarGlobalDesUrl = 'http://localhost:3000/api/juego/global/menor';
  private EliminarURL = 'http://localhost:3000/api/juego/eliminar';
  constructor(private http:HttpClient) { }

  puntaje(puntaje:any){
    return this.http.post<any>(this.puntajeUrl,puntaje); 
  }
  listar(){
    return this.http.get<any>(this.ListarPUrl);
  }
  listarASC(){
    return this.http.get<any>(this.ListarASCPUrl);
  }
  listarDEC(){
    return this.http.get<any>(this.ListarDESUrl);
  }
  listarGlobalAsc(){
    return this.http.get<any>(this.ListarGlobalAscUrl);
  }
  listarGlobalDes(){
    return this.http.get<any>(this.ListarGlobalDesUrl);
  }
  eliminarPuntaje(puntaje:any){
    const _id = puntaje._id;
    const url = `${this.EliminarURL}/${_id}`
    return this.http.delete<any>(url);
  }
}
