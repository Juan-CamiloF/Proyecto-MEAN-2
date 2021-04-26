import { Component, OnInit } from '@angular/core';
//Importar el servicio
import { UsuarioService } from '../../servicios/usuario.service';
//Router
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;
  enviar = false;
  constructor(
    private usuario: UsuarioService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasenia: ['', Validators.required],
    });
  }

  get f(){
    return this.formulario.controls
  }
  iniciarUsuario() {
    this.enviar = true;
    if(this.formulario.invalid) return;

    this.usuario.iniciar(this.formulario.value).subscribe(
      (res)=>{
        localStorage.setItem('token',res.jwt)
        this.router.navigate(['/juego']);
      },
      (err)=> document.getElementById('spanLogin')!.innerText=`${err.error}`
    )
  }
}
