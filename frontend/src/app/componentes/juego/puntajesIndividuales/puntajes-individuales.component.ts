import { Component, OnInit } from '@angular/core';
import { puntaje} from 'src/app/modelos/interfaces';
import { JuegoService } from 'src/app/servicios/juego/juego.service';

@Component({
  selector: 'app-puntajes-individuales',
  templateUrl: './puntajes-individuales.component.html',
  styleUrls: ['./puntajes-individuales.component.css'],
})
export class PuntajesIndividualesComponent implements OnInit {
  listaResultados: puntaje[] = [];
  listaResultadosASC: puntaje[] = [];
  listaResultadosDES: puntaje[] = [];
  listaOrdenada: puntaje[] = [];
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
      (res) => {
        this.listaResultadosDES = res;
      },
      (err) => console.log(err.error)
    );
  }
  eliminar(puntaje: any) {
    this.juego.eliminarPuntaje(puntaje).subscribe(
      (res) => {
        const index1 = this.listaResultados.indexOf(puntaje);
        if (index1 !== -1) {
          this.listaResultados.splice(index1,1);
          this.juego.listarASC().subscribe(
            (res) => {
              this.listaResultadosASC = res;
            },
            (err) => console.log(err.error)
          );
          //Listar por orden DES
          this.juego.listarDEC().subscribe(
            (res) => {
              this.listaResultadosDES = res;
            },
            (err) => console.log(err.error)
          );
        }
      },
      (err) => console.log(err.error)
    );
  }
  eliminarTodo(puntaje: puntaje[]) {
    for (let i of puntaje) {
      this.juego.eliminarPuntaje(i).subscribe(
        (res) => {
          this.listaResultados = [];
        },
        (err) => console.log(err.error)
      );
    }
  }
}
