import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  contactContents:any[] = [];
  constructor() { }

  ngOnInit() {
    this.contactContents = [
      {type:'text',placeHolder:'Service Name',requiredName:'Name'},
      {type:'number',placeHolder:'How many times',requiredName:'Quantity'},
      {type:'datetime-local',placeHolder:'Date and Time',requiredName:'Date'},
      {type:'text',placeHolder:'Message \special requriements',requiredName:'Message'}
    ]
  }

}
