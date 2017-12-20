import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:Array<any>;
  usuario :any;
  constructor(private usuariosService:UsuariosService) {
    this.usuario={};
    this.usuario.nombre="";
   }

  ngOnInit() {

    //this.usuarios=this.usuariosService.obtenerUsuarios();
    this.usuariosService.obtenerUsuarios().then((usuarios) => {
      this.usuarios =JSON.parse(usuarios['_body']);
      
    });} 
   nuevoUsuario(){
    this.usuariosService.agregarUsuarios(this.usuario).then((respuesta) => {
     console.log(respuesta);
     this.ngOnInit();     
    }); 
  }
  

}
