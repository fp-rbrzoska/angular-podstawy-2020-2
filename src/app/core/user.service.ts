import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable()
export class UserService {

  private testUsers: User[] = [
    { name: 'Alojzy', age: 67 },
    { name: 'Tomasz', age: 45 }
  ];

  constructor() {
    // setInterval(()=> {
    //   this.testUsers[1].age++;
    //   console.log(this.testUsers)
    // }, 3000)
  }

  getAllUsers() {
    return this.testUsers;
  }
}
