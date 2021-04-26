import { Injectable } from '@angular/core';
//Http Interceptor
import {HttpInterceptor} from '@angular/common/http';
//Servicio del token
import {UsuarioService} from './usuario.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private usuario:UsuarioService) { }
  intercept(req:any, next:any){
    const tokenReq = req.clone({
      setHeaders:{
        Authorization: 'Bearer: ' + this.usuario.obtenerToken(),
      }
    })
    return next.handle(tokenReq)
  }
}
