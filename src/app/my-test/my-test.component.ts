import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent implements OnInit {

  initialCounterValue = 10;
  counter;
  constructor() { }

  ngOnInit(): void {
  }

  updateCounter(counterValue: number) {
    this.counter = counterValue;
  }

}
