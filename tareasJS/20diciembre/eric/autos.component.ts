import { Component, OnInit } from '@angular/core';
import { AutosService } from './autos.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {

    auto: any;

  constructor(private autosService: AutosService) { }

  ngOnInit() {
    this.autosService.obtenerAutos().then((autos)=>{
      this.autos = JSON.parse(autos['_body']);
    });
  }

}
