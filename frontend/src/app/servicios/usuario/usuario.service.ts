import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login, usuario } from 'src/app/modelos/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private registrarUrl = 'http://localhost:3000/api/registro';
  private iniciarUrl = 'http://localhost:3000/api/iniciar';
  constructor(private http: HttpClient, private router:Router) {}

  registrar(usuario: usuario) {
    return this.http.post<usuario>(this.registrarUrl, usuario);
  }
  iniciar(usuario: usuario) {
    return this.http.post<login>(this.iniciarUrl, usuario);
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
