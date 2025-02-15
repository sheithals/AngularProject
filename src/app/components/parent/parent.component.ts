import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'besant-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  @ViewChild('titleRef') titleRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  getRef(): void {
    console.log(this.titleRef);
    this.titleRef.nativeElement.innerText = "Navin"
  }
}
