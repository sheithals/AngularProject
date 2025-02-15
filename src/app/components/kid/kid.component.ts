import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'besant-kid',
  templateUrl: './kid.component.html',
  styleUrls: ['./kid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KidComponent implements OnInit {
  @Input() arr: number[] = []
  number: number = 0
  constructor(private cf: ChangeDetectorRef) {
    // this.cf.detach()
  }

  ngOnInit(): void {
    setInterval(() => {
      this.number = Math.random()
      // this.cf.markForCheck()
      // this.cf.detectChanges()
    }, 1000);
  }

  kid() {
    console.log('kid');
    return 'kid'
  }
}
