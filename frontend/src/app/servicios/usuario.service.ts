import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private registrarUrl = 'http://localhost:3000/api/registro';
  private iniciarUrl = 'http://localhost:3000/api/iniciar';
  constructor(private http: HttpClient, private router:Router) {}

  registrar(usuario: any) {
    return this.http.post<any>(this.registrarUrl, usuario);
  }
  iniciar(usuario: any) {
    return this.http.post<any>(this.iniciarUrl, usuario);
  }
  loginOn(){
    return !!localStorage.getItem('token')
  }
  obtenerToken(){
    return localStorage.getItem('token');
  }
  cerrarSesion(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
