import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'besant-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.scss']
})
export class GrandparentComponent implements OnInit {
  title: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
