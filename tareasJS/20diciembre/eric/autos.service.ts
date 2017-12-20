import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AutosService {

  constructor(private http: Http) { }

  obtenerAutos(){

    return this.http.get('http://localhost:3000/autos').toPromise();
  }

}




























