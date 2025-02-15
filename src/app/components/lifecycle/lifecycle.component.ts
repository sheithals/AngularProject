import { Component, ContentChild, Input, OnInit, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'besant-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {

  @Input() email!: string;
  @ContentChild("emailID") emailId!: string;
  // @ViewChild("title") title!: string;
  @ViewChild("title") title!: string;
  @ViewChild("role") role!: string;

  isAdmin: boolean = true

  course: string = "Angular";
  skill: string[] = ["Typescript", "Scss", "Rxjs", "Git"]
  products: any[] = []
  constructor() {
    console.log("LifecycleComponent constructor called");
    // console.log(this.emailId, "PRojected Content");
    // console.log(this.title, "check the view child value");

  }

  ngOnChanges(): void {
    console.log("LifecycleComponent ngOnChanges called");
    // console.log(this.emailId, "PRojected Content");
    // console.log(this.title, "check the view child value");

  }

  ngOnInit(): void {
    console.log("LifecycleComponent ngOnInit called");
    // console.log(this.emailId, "PRojected Content");
    // console.log(this.title, "check the view child value");

  }

  ngDoCheck(): void {
    console.log("LifecycleComponent ngDoCheck called");
    // console.log(this.title, "check the view child value");

  }

  ngAfterContentInit(): void {
    console.log("LifecycleComponent ngAfterContentInit called");
    // console.log(this.emailId, "PRojected Content");
    // console.log(this.title, "check the view child value");

  }

  ngAfterContentChecked(): void {
    console.log("LifecycleComponent ngAfterContentChecked called");
    // console.log(this.emailId, "PRojected Content");
    // console.log(this.title, "check the view child value");

  }

  ngAfterViewInit(): void {
    console.log("LifecycleComponent ngAfterViewInit called");
    // console.log(this.title, "check the view child value title");
    // console.log(this.role, "check the view child value role");
  }

  ngAfterViewChecked(): void {
    console.log("LifecycleComponent ngAfterViewChecked called");
    // console.log(this.emailId, "PRojected Content");
    // console.log(this.title, "check the view child value title");
    // console.log(this.role, "check the view child value role");
  }

  handleClick() {
    console.log("handleClick called");
    this.isAdmin = !this.isAdmin
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("LifecycleComponent ngOnDestroy called");
  }
}
