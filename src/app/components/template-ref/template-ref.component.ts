import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'besant-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.scss']
})
export class TemplateRefComponent implements OnInit {

  userEmail: string = "";
  // @ViewChild('userEmail') inputEle!: ElementRef
  @ViewChildren('userEmail') inputEle!: QueryList<ElementRef>
  isUser: boolean = true

  users: string[] = ["item1", "item2", "item3"]
  constructor() { }

  ngOnInit(): void {
  }

  submitEmail() {
    console.log(this.inputEle);
    // console.log(userEmail);

    this.inputEle.forEach((el: ElementRef) => {
      console.log(el.nativeElement.value);
    })

  }

  // getINputElement(event: Event) {
  //   console.log((event.target as HTMLInputElement)?.value);

  // }
}
