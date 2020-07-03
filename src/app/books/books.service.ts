import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../models/Book';

@Injectable()
export class BooksService {

  private booksListResponseSubj = new BehaviorSubject<HttpResponse<Book[]>>(null);
  booksList$ = this.booksListResponseSubj.pipe(
    map(resp => resp ? resp.body : null)
  );
  booksCount$ = this.booksListResponseSubj.pipe(
    map(resp => resp ? resp.headers.get('x-total-count') : null)
  )

  private processingBooksSubj = new BehaviorSubject<boolean>(false);
  processingBooks$ = this.processingBooksSubj.asObservable();

  constructor(private http: HttpClient) {
  }

  fetchBooks() {
    this.processingBooksSubj.next(true);
    this.http.get<Book[]>('http://localhost:3000/books', {
      observe: 'response'
    }).subscribe(books => {
      this.booksListResponseSubj.next(books);

    this.processingBooksSubj.next(false);
    })
  }

  getBookById(id: string) {
    return this.http.get<Book>('http://localhost:3000/books/' + id)
  }

  addNewBook(book: Book) {
    return this.http.post<Book>('http://localhost:3000/books', book)
  }

}
