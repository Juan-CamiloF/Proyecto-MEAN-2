import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes para navegar
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { JuegoComponent } from './componentes/juego/juego.component';
import { PuntajesIndividualesComponent } from './componentes/puntajes-individuales/puntajes-individuales.component';
import { PuntajesGlobalesComponent } from './componentes/puntajes-globales/puntajes-globales.component';
//Traer el guardia
import { GuardiaGuard } from './guard/guardia.guard'
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
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
