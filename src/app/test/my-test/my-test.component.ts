import { Component, OnInit } from '@angular/core';
import { User } from  '../../models/User'
import { UserService } from '../../core/user.service';

@Component({
  selector: 'fp-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent implements OnInit {

  testUsers: User[];
  initialCounterValue = 10;
  counter;

  constructor(private userService: UserService) {
    this.testUsers = this.userService.getAllUsers();
  }

  ngOnInit(): void {
  }

  updateCounter(counterValue: number) {
    this.counter = counterValue;
  }

}
