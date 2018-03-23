import { Component, OnInit } from '@angular/core';
declare var require: any
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  private MYSTIQUE = require("./assets/mystique.png");

  constructor() { }

  ngOnInit() {
  }

}
