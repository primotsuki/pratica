import { Component, OnInit } from '@angular/core';

import {AutoService} from './auto.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {


  persona: string;
  autos: Array<any>

  constructor(private AutoService: AutoService) { 
    this.persona="";
  }

  ngOnInit() {
    this.AutoService.ObtenerAuto(this.persona).then((autos)=>{
      this.autos =JSON.parse(autos['_body']);
      console.log(autos);
    }).catch((error)=>{
      console.log(error);
    })
  }

}
