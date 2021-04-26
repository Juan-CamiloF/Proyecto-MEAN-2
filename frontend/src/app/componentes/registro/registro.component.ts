import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Importar el servicio
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  formulario!: FormGroup;
  enviar = false;

  constructor(
    private usuario: UsuarioService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasenia: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  get f(){ return this.formulario.controls;}

  registrarUsuario() {
    this.enviar= true
    if(this.formulario.invalid) return;

    
    this.usuario.registrar(this.formulario.value).subscribe(
      (res) => {
        document.getElementById('spanRegistro')!.innerText=`Registrado con Exito`;
        this.router.navigate(['/login']);
      },
      (err) => {
        document.getElementById('spanRegistro')!.innerText=`${err.error}`;
      }
    );
  }
}
