import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';

@Injectable({
  providedIn: 'root',
})
export class GuardiaGuard implements CanActivate {
  constructor(private usuario: UsuarioService, private router: Router) {}

  canActivate(): boolean {
    if (this.usuario.loginOn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
