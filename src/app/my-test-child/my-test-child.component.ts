import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'fp-my-test-child',
  templateUrl: './my-test-child.component.html',
  styleUrls: ['./my-test-child.component.scss']
})
export class MyTestChildComponent implements OnInit {

  @Input() counter = 0;
  @Output() counterClick = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counter++;
    this.counterClick.emit(this.counter);
  }

}
