import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'fp-books-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.scss']
})
export class BooksItemComponent implements OnInit {

  @Input() book: Book;
  constructor() { }

  ngOnInit(): void {
  }

}
