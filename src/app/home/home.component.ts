import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeTitle = 'My Home Page';
  myNumbr = 1;
  constructor() { }

  ngOnInit(): void {
  }

  formatCurrency(val: number) {
    return 'EUR ' + val.toFixed(2)
  }

  handleClick(){

  }

}
