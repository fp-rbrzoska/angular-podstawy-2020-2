import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  private testUsers: User[] = [
    { name: 'Alojzy', age: 67 },
    { name: 'Tomasz', age: 45 }
  ];

  constructor(private http: HttpClient) {

  }

  getAllUsers() {
    return this.testUsers;
  }

  getConfig() {
    return this.http.get<any>('http://localhost:3000/config')
  }
}
