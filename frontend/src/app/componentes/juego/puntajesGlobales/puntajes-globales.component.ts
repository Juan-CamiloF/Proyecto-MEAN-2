import { Component, OnInit } from '@angular/core';
import { puntajeGlobal } from 'src/app/modelos/interfaces';
import { JuegoService } from 'src/app/servicios/juego/juego.service';
@Component({
  selector: 'app-puntajes-globales',
  templateUrl: './puntajes-globales.component.html',
  styleUrls: ['./puntajes-globales.component.css'],
})
export class PuntajesGlobalesComponent implements OnInit {
  listarAsc: puntajeGlobal[] = [];
  listarDes: puntajeGlobal[]= [];
  constructor(private juego: JuegoService) {}
  ngOnInit(): void {
    //Listar de forma ascendente
    this.juego.listarGlobalAsc().subscribe(
      (res) => {
        this.listarAsc = res;
      },
      (err) => console.log(err.error)
    );
    //Listar de forma descendiente
    this.juego.listarGlobalDes().subscribe(
      (res)=>{
        this.listarDes = res;
      },
      (err) => console.log(err.error)
    )
  }
  
}
