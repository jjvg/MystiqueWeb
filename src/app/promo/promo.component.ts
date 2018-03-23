import { Component, OnInit } from '@angular/core';
declare var require : any
@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {
  private MAKEUP = require("./assets/makeup.jpg");
  private HAIR = require("./assets/hairstyle.jpg");
  constructor() { }

  ngOnInit() {
  }

}
