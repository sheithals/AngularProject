import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'besant-cpe',
  templateUrl: './cpe.component.html',
  styleUrls: ['./cpe.component.scss']
})
export class CpeComponent implements OnInit {

  @Input() userName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
