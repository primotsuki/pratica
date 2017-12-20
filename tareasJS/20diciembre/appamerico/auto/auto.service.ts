import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable()
export class AutoService {

  constructor(private http:Http) { }

  obtenerauto(id_usuario){
    
      //1rareturn [{"nombre":"americo"}];
      
      return this.http.get('http://localhost:3000/api/user/+'+id_usuario+'/autos').toPromise();
            
      
    
      
    }

}
