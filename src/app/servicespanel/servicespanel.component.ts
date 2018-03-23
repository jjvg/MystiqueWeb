import { Component, OnInit } from '@angular/core';
declare var require: any
@Component({
  selector: 'app-servicespanel',
  templateUrl: './servicespanel.component.html',
  styleUrls: ['./servicespanel.component.css']
})
export class ServicespanelComponent implements OnInit {

  private HAIR = require("./assets/hair.jpg");
  
  private MAKEUP = require("./assets/makeup.jpg");

  constructor() { }

  ngOnInit() {
  }

}
