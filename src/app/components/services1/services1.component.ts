import { Component, Input, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
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
  selector: 'besant-services1',
  templateUrl: './services1.component.html',
  styleUrls: ['./services1.component.scss'],
  providers: [LoggerService]
})
export class Services1Component implements OnInit {

  userName: string = ""
  userID: string = ""
  userEmail: string = ""
  userWebsite: string = ""
  @Input() recentDeletedUser!: IUser

  constructor(private loggerService: LoggerService) { }

  ngOnInit(): void {
    // let loggerService = new LoggerService();
    this.loggerService.printLog("ngOnInit called besant-services1");
  }
  getValue(){
    console.log(this.userName);
    
  }
  addUser() {

    this.loggerService.printLog("Add user called besant-services1");
    
    const user = {
      id: this.userID,
      username: this.userName,
      email: this.userEmail,
      website: this.userWebsite
    }
    
    this.loggerService.printLog(user);
  }
}
