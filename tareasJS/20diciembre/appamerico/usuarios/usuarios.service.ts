import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable()
export class UsuariosService {

  constructor(private http:Http) { }
obtenerUsuarios(){

  //1rareturn [{"nombre":"americo"}];
  
  return this.http.get('http://localhost:3000/api/user/').toPromise();

  
}

agregarUsuarios(usuario){
  return this.http.post('http://localhost:3000/api/user/',usuario).toPromise();
}

}
