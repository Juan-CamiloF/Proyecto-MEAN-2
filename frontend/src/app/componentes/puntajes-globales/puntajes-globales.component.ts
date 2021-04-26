import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../../servicios/juego.service';
@Component({
  selector: 'app-puntajes-globales',
  templateUrl: './puntajes-globales.component.html',
  styleUrls: ['./puntajes-globales.component.css'],
})
export class PuntajesGlobalesComponent implements OnInit {
  listarAsc: any = [];
  listarDes:any = [];
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
