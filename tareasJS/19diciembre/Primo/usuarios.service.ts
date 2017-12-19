import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class UsuariosService {

  constructor(private http: Http) { }

  obtenerUsuario(){
  return this.http.get('http://localhost:3000/api/personas').toPromise();
  //return[{"nombre": "primo"}];
}

crearUsuario(usuarios){
  return this.http.post('http://localhost:3000/api/personas',usuarios).toPromise();
}
}
