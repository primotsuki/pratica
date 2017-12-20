import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AutoService {

  constructor(private http: Http) { }

  ObtenerAuto(p:string){
    return this.http.get('http://localhost:3000/api/persona/'+p+'/auto').toPromise();
  }

}
