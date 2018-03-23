import { Component, OnInit } from '@angular/core';
declare var require: any
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  private LOGO = require("./assets/logo.jpg");

  constructor() { }

  ngOnInit() {
  }

}
