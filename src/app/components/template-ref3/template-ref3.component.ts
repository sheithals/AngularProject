import { Component, Input, OnInit } from '@angular/core';
import { TemplateRef2Component } from '../template-ref2/template-ref2.component';

@Component({
  selector: 'besant-template-ref3',
  templateUrl: './template-ref3.component.html',
  styleUrls: ['./template-ref3.component.scss']
})
export class TemplateRef3Component implements OnInit {

  @Input() templateTwo!: TemplateRef2Component
  isUser: boolean = false
  constructor() { }

  ngOnInit(): void {
    // console.log(this.templateTwo.employee);
    // console.log(this.templateTwo.user);
    // console.log(this.templateTwo.getUserDetails());
    // console.log(this.templateTwo.getUserDetails());
    console.log(Object.keys(this.templateTwo.user).length);
    
    this.isUser = Object.keys(this.templateTwo.user).length > 0
  }

}
