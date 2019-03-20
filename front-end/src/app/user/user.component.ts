import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user :any;
  constructor() { 
    this.user = {
      name: "Yuri",
      gender: "female",
    }
  }

  ngOnInit() {
    
  }
  clickTriggered(){
    alert("helloworld!");
  }

}
