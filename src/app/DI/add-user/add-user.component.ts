import { Component, OnInit } from '@angular/core';
import { DiUserService } from '../di-user.service';

@Component({
  selector: 'besant-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  // providers: [DiUserService]
})
export class AddUserComponent implements OnInit {

  userName: string = ""

  constructor(private userService: DiUserService) { }

  ngOnInit(): void {
    this.userService.statusUpdated.subscribe((data: { name: string, status: string, id?: number }) => {
      console.log(data, "dataaaaaaaaaa");
    })
  }

  onAddUser() {
    this.userService.addUser(this.userName, "active")
  }
}
