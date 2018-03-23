import { Component, OnInit } from '@angular/core';
declare var require: any
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  private EMPLOYEE1 = require("./assets/team-1.jpg");
  private EMPLOYEE2 = require("./assets/team-2.jpg");
  constructor() { }

  ngOnInit() {
  }

}
