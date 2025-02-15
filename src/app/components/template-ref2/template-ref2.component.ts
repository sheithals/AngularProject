import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'besant-template-ref2',
  templateUrl: './template-ref2.component.html',
  styleUrls: ['./template-ref2.component.scss']
})
export class TemplateRef2Component implements OnInit {

  user: { name: string, location: string } = { name: "jegadeesh", location: "trichy" }

  employee: { Ename: string, Elocation: string } = { Ename: "jegadeesh", Elocation: "trichy" }

  constructor() { }

  ngOnInit(): void {
  }

  getUserDetails(): { name: string, location: string } {
    return this.user
  }

  getEMployeeDetails(): { Ename: string, Elocation: string } {
    return this.employee
  }
}
