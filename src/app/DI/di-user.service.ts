import { Injectable } from '@angular/core';
import { EventEmitter } from "@angular/core"

@Injectable({
  providedIn: 'root'
})

export class DiUserService {

  users: { name: string, status: string, id?: number }[] = [
    {
      id: 1,
      name: "Navin",
      status: "active"
    },
    {
      id: 2,
      name: "Anbu",
      status: "active"
    },
    {
      id: 3,
      name: "Kishore",
      status: "active"
    }
  ]

  statusUpdated = new EventEmitter<{ status: string, index: number }>();

  constructor() { }


  addUser(name: string, status: string) {
    this.users.push({ name, status })
  }

  updateStatus(index: number, status: string) {
    this.users[index].status = status;
    const user = {
      status, index
    }
    this.statusUpdated.emit(user)
  }

  getUserById(id: number) {
    console.log(id,"id????????????",typeof id);
    
    return this.users.find(user => user.id === id)
  }
}
