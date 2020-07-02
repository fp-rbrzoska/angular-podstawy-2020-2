import { Component, OnInit } from '@angular/core';
import { User } from  '../models/User'
import { TestService } from '../test.service';

@Component({
  selector: 'fp-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent implements OnInit {

  testUsers: User[];
  initialCounterValue = 10;
  counter;

  constructor(private testService: TestService) {
    this.testUsers = this.testService.getAllUsers();
  }

  ngOnInit(): void {
  }

  updateCounter(counterValue: number) {
    this.counter = counterValue;
  }

}
