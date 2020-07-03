import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'fp-books-item-details',
  templateUrl: './books-item-details.component.html',
  styleUrls: ['./books-item-details.component.scss']
})
export class BooksItemDetailsComponent implements OnInit {

  id: string;
  book$: Observable<Book>;
  constructor(private route: ActivatedRoute, private booksService: BooksService) {
    this.id = route.snapshot.params.id;
    this.book$ = this.booksService.getBookById(this.id);
  }

  ngOnInit(): void {
  }

}
