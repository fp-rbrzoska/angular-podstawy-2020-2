import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'fp-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  obsVar$ = of(1,2,3,4);
  mySubj = new Subject();
  mybSubj = new BehaviorSubject('0a');
  constructor() { }

  ngOnInit(): void {

    // this.mySubj.subscribe(val => console.log(val))
    // this.mySubj.next('1a');
    // this.mySubj.subscribe(val => console.log(val))
    // this.mySubj.next('2a');
    //this.obsVar$.subscribe(val => console.log(val))

    this.mybSubj.subscribe(val => console.log(val))
    this.mybSubj.next('1a');
    this.mybSubj.subscribe(val => console.log(val))
    this.mybSubj.next('2a');
  }


}
