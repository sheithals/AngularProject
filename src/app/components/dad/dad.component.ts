import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'besant-dad',
  templateUrl: './dad.component.html',
  styleUrls: ['./dad.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DadComponent implements OnInit {
  arr: number[] = []
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.arr = [Math.random()] // resassign
      // this.arr.push(Math.random())
    }, 1000);


    // smart vs dumb components
  }
  dad() {
    console.log('dad');
    return 'dad'
  }

}
