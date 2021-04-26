import { Component, OnInit } from '@angular/core';
//Servicio del usuario
import {UsuarioService} from '../../servicios/usuario.service'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public usuario:UsuarioService) { }

  ngOnInit(): void {
  }

}
