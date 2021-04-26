import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
//Componentes
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
//Material
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';


//Swal
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

//Formulario
import { ReactiveFormsModule } from '@angular/forms';

//Servicios 
import { UsuarioService } from './servicios/usuario.service';
import { JuegoService } from './servicios/juego.service';
import { TokenInterceptorService } from './servicios/token-interceptor.service';
import { JuegoComponent } from './componentes/juego/juego.component';
import { PuntajesIndividualesComponent } from './componentes/puntajes-individuales/puntajes-individuales.component';
import { PuntajesGlobalesComponent } from './componentes/puntajes-globales/puntajes-globales.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent,
    JuegoComponent,
    PuntajesIndividualesComponent,
    PuntajesGlobalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module
  ],
  providers: [UsuarioService,JuegoService,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
