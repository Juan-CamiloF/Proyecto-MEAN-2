import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//Router
import { Router } from '@angular/router';
//Servicio de juego
import { JuegoService } from 'src/app/servicios/juego/juego.service';
//Swal Alert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css'],
})
export class JuegoComponent implements OnInit {
  @ViewChild('puntaje') puntaje!: ElementRef;
  constructor(private juego: JuegoService, private router: Router) {}
  //Inicializar el contador
  contador: number = 0;
  ngOnInit(): void {
    //Apenas se cargue la pagina encontrar el elemento
    (<HTMLDivElement>(
      document.getElementById('contenedorJuego')
    )).addEventListener('click', () => {
      //Cada que le haga click aumenta el contador
      this.contador++;
      //Mostrar cantidad de clicks
      this.puntaje.nativeElement.innerText = `${this.contador}`;
    });
  }
  //Iniciar el cronometro
  //Inicializar el click
  hizoClick = false;
  cronometro() {
    //Si hace 1 click inicializa el callback
    if (!this.hizoClick) {
      window.setTimeout(() => {
        Swal.fire({
          title: `La cantidad de clicks en 15 segundos fue de ${this.contador}`,
          width: 600,
          padding: '3em',
          background: '#fff',
          backdrop: `
            rgba(0,0,123,0.4)
            left top
            no-repeat
          `,
        }).then((result) => {
          if (result.isConfirmed) {
            this.registrarPuntaje(this.contador);
          } else {
            this.registrarPuntaje(this.contador);
          }
        });
      }, 15000);
      this.hizoClick = true;
    }
  }
  //Inicializar Json del puntaje y promedio
  puntajeJson = {
    cantidad: 0,
    promedio: '',
  };
  //Resgistrar el puntaje
  registrarPuntaje(n: number) {
    //Dar los valores al json
    this.puntajeJson.cantidad = n;
    let promedio = n / 15;
    //Tomar maximo 2 decimales
    this.puntajeJson.promedio = promedio.toFixed(2);
    //Llevar el json al post para el backend
    this.juego.puntaje(this.puntajeJson).subscribe(
      (res) => {
        this.router.navigate(['/puntajesIndividuales']);
      },
      (err) => {
        console.log(err);
        document.getElementById('puntaje')!.innerText = `${err.error}`;
      }
    );
  }
}
