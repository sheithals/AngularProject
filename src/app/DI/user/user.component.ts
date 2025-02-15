import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiUserService } from '../di-user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'besant-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  // providers: [DiUserService]
})
export class UserComponent implements OnInit {
  userId!: number
  user!:any
  // @Input() user!: { name: string, status: string }
  // @Input() index!: number
  // @Output() uStatus: EventEmitter<string> = new EventEmitter<string>();
  constructor(private userService: DiUserService, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(param => {
      console.log(param, "param");
      this.userId = +param["userId"]
      // this.userId = Number(param["userId"])
      this.user = this.userService.getUserById(this.userId)
    })
  }

  onUpdateStatus(status: string) {
    // this.uStatus.emit(status)
    // this.userService.updateStatus(this.index, status)
  }
}
