import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss']
})
export class NgswitchComponent implements OnInit {

  grade : any;
  constructor() { 
    this.grade='null';
  }

  ngOnInit(): void {
  }

}
