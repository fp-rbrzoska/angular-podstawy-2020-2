import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fp-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.scss']
})
export class BooksAddComponent implements OnInit {

  constructor(private bookService: BooksService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSave(book) {
    this.bookService.addNewBook(book).subscribe(() => this.router.navigateByUrl('/books'));
  }

}
