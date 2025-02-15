import { Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { CpeComponent } from '../cpe/cpe.component';

@Component({
  selector: 'besant-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() {
    console.log("ChildComponent constructor called");
    // console.log(this.emailId, "PRojected Content");
    // console.log(this.title, "check the view child value");

  }

  ngOnChanges(): void {
    console.log("ChildComponent ngOnChanges called");
    // console.log(this.emailId, "PRojected Content");
    // console.log(this.title, "check the view child value");

  }

  ngOnInit(): void {
    console.log("ChildComponent ngOnInit called");
    // console.log(this.emailId, "PRojected Content");
    // console.log(this.title, "check the view child value");

  }

  ngDoCheck(): void {
    console.log("ChildComponent ngDoCheck called");
    // console.log(this.title, "check the view child value");

  }

  ngAfterContentInit(): void {
    console.log("ChildComponent ngAfterContentInit called");
    // console.log(this.emailId, "PRojected Content");
    // console.log(this.title, "check the view child value");

  }

  ngAfterContentChecked(): void {
    console.log("ChildComponent ngAfterContentChecked called");
    // console.log(this.emailId, "PRojected Content");
    // console.log(this.title, "check the view child value");

  }

  ngAfterViewInit(): void {
    console.log("ChildComponent ngAfterViewInit called");
    // console.log(this.title, "check the view child value title");
    // console.log(this.role, "check the view child value role");
  }

  ngAfterViewChecked(): void {
    console.log("ChildComponent ngAfterViewChecked called");
    // console.log(this.emailId, "PRojected Content");
    // console.log(this.title, "check the view child value title");
    // console.log(this.role, "check the view child value role");
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("ChildComponent ngOnDestroy called");
  }
}
