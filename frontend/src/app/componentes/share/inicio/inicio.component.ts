import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  formulario!: FormGroup;
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
