import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../../servicios/juego.service';

@Component({
  selector: 'app-puntajes-individuales',
  templateUrl: './puntajes-individuales.component.html',
  styleUrls: ['./puntajes-individuales.component.css'],
})
export class PuntajesIndividualesComponent implements OnInit {
  listaResultados: any = [];
  listaResultadosASC: any = [];
  listaResultadosDES: any = [];
  constructor(private juego: JuegoService) {}

  ngOnInit(): void {
    //Listar por fecha
    this.juego.listar().subscribe(
      (res) => {
        this.listaResultados = res;
      },
      (err) => console.log(err.error)
    );
    //Listar por orden ASC
    this.juego.listarASC().subscribe(
      (res) => {
        this.listaResultadosASC = res;
      },
      (err) => console.log(err.error)
    );

    //Listar por orden DES
    this.juego.listarDEC().subscribe(
      (res)=>{
        this.listaResultadosDES = res;
      }, 
      (err)=> console.log(err.error)
    )
  }
  eliminar(puntaje:any){
    console.log(puntaje)
    this.juego.eliminarPuntaje(puntaje).subscribe(
      (res)=>{
        const index = this.listaResultados.indexOf(puntaje);
        if(index != -1){
          this.listaResultados.splice(index,1);
        }
      },
      (err)=>console.log(err.error)
    )
  }
  onload(){
    window.location.reload();
  } 
  eliminarTodo(puntaje:[]){
    for (let i of puntaje) {
      this.juego.eliminarPuntaje(i).subscribe(
        (res)=>{
          
        },
        (err)=>console.log(err.error)
      )
    }
  }
}
