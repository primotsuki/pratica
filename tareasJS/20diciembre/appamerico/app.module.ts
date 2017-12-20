import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import {UsuariosService} from './usuarios/usuarios.service';
import {AutoComponent}from './auto/auto.component';
import {AutoService} from './auto/auto.service';
import { HttpModule } from '@angular/http';
import {FormsModule}  from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    AutoComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    FormsModule
  ],
  providers: [UsuariosService,AutoService],
  
  bootstrap: [AppComponent],
})
export class AppModule { }
