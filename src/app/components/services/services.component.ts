import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { UserService } from 'src/app/services/user.service';
interface IUser {
  id: number,
  name?: string,
  username: string,
  email: string,
  address?: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    },

  }
  phone?: string,
  website?: string,
  company?: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

@Component({
  selector: 'besant-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [LoggerService, UserService]
})

export class ServicesComponent implements OnInit {
  users: IUser[] = []

  recentDeletedUser!: IUser

  constructor(private loggerService: LoggerService, private userService: UserService) { }

  ngOnInit(): void {
    // console.log("ngOnInit called");.
    // let loggerService = new LoggerService();
    this.loggerService.printLog("ngOnInit called");
    this.users = this.userService.users
  }

  removedUser(user: IUser) {
    // // console.log(user, "removedUser");
    // let loggerService = new LoggerService();
    this.loggerService.printWarn(user);
    this.userService.removedUser(user.id)
    this.recentDeletedUser = user
  }
}
