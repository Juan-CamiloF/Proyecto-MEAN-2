import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes para navegar
//Traer el guardia
import { GuardiaGuard } from './guard/guardia.guard'
import { JuegoComponent } from './componentes/juego/juego/juego.component';

import { InicioComponent } from './componentes/share/inicio/inicio.component';
import { RegistroComponent } from './componentes/share/registro/registro.component';
import { PuntajesGlobalesComponent } from './componentes/juego/puntajesGlobales/puntajes-globales.component';
import { PuntajesIndividualesComponent } from './componentes/juego/puntajesIndividuales/puntajes-individuales.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:InicioComponent},
  {path:'registro',component:RegistroComponent},
  {path:'juego',component:JuegoComponent, canActivate:[GuardiaGuard]},
  {path:'puntajesGlobales',component:PuntajesGlobalesComponent,canActivate:[GuardiaGuard]},
  {path:'puntajesIndividuales',component:PuntajesIndividualesComponent,canActivate:[GuardiaGuard]},
  {path:'**',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
