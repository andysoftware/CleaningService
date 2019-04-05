import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu-bar',
  templateUrl: './main-menu-bar.component.html',
  styleUrls: ['./main-menu-bar.component.css']
})
export class MainMenuBarComponent implements OnInit {
  menuItems:any;
  constructor() { }

  ngOnInit() {
    this.menuItems = [ {name:"Home",link:"main#login"},{name:"Contact",link:"main#contact"},{name:"About",link:"about"}]
  }

}
