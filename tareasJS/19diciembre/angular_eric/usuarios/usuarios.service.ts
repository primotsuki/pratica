import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsuariosService {

  constructor(private http: Http) { }

  obtenerUsuarios(){

    return this.http.get('http://localhost:3000/usuarios/').toPromise();
  }

  crearUsuario(usuario){
    return this.http.post('http://localhost:3000/usuarios/', usuario).toPromise();
  }

}




























