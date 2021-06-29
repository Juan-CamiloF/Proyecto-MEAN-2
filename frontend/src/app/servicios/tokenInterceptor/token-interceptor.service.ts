import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';

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
