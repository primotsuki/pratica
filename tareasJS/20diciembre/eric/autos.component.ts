import { Component, OnInit } from '@angular/core';
import { AutosService } from './autos.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {

    auto: any;

  constructor(private autosService: AutosService) {
    this.auto = {};
    this.auto.nombre = "";
    this.auto.marca = "";
    this.auto.usuarioId = "";
   }

  ngOnInit() {
    this.autosService.obtenerAutos().then((autos)=>{
      this.autos = JSON.parse(autos['_body']);
    });
  }
  nuevoAuto(){
    this.autosService.crearAuto(this.auto).then((respuesta)=>{
        console.log(respuesta);
        this.ngOnInit();
    });
  }

}
