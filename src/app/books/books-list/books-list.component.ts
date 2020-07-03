import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'fp-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  processing$: Observable<boolean>;
  books$: Observable<Book[]>;
  constructor(private booksService: BooksService) {
    this.processing$ = booksService.processingBooks$;
    this.books$ = booksService.booksList$;
    this.booksService.fetchBooks();
   }

  ngOnInit(): void {
  }

}
