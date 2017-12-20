import { Component, OnInit } from '@angular/core';
import { AutoService } from './auto.service';


@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {


  autos:Array<any>;
  auto :any;
  personaid:string;
  constructor(private autoService:AutoService) { 
    this.auto={};
    this.auto.marca="";
     this.personaid="";
  }

  ngOnInit() {
    
    this.autoService.obtenerauto(this.personaid).then((autos) => {
      this.autos =JSON.parse(autos['_body']);
      
    });}

    
  } 

  



