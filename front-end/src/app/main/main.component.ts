import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public infos:any[] = [];
  constructor() { }

  ngOnInit() {
    this.infos = [
      {inf: '1298374@gmail.com',name:'Email'},
      {inf: '+362121111',name:'Phone'},
      {inf: 'Cleaning Service Ltd., 1133 Budapest, Hungary',name:'Address'},
      {inf: '42.111,45.7789',name:'Geo-Location'}
    ]
  }
}
