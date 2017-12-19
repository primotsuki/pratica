import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario: any;

  constructor(private usuariosService: UsuariosService) { 
    this.usuario = {};
    this.usuario.nombre = "";
    this.usuario.edad = 0;

  }

  ngOnInit() {

    this.usuariosService.obtenerUsuarios().then((usuarios) => {

      this.usuario = JSON.parse(usuarios['_body']);
    });
   
    // this.usuarios = this.usuariosService.obtenerUsuarios();
  }
  nuevoUsuario(){
    this.usuariosService.crearUsuario(this.usuario).then((respuesta)=>{
        console.log(respuesta);
        this.ngOnInit();
    });
  }
}



















