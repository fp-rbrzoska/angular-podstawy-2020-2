import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'fp-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.scss']
})
export class BooksFormComponent implements OnInit {

  @Input() book: Book;
  @Output() save = new EventEmitter();
  bookForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    thumbnailUrl: new FormControl(null),
    longDescription: new FormControl({
      value: 'no info',
      disabled: true
    }, [Validators.required, Validators.maxLength(200)])
  })
  constructor() { }

  ngOnInit(): void {

    this.bookForm.controls.title.statusChanges.subscribe(status => {
      if(status === 'INVALID') {
        this.bookForm.controls.longDescription.disable()
      } else {
        this.bookForm.controls.longDescription.enable()
      }
    });

    if(this.book) {
      this.bookForm.patchValue(this.book)
    }
  }

  handleSave() {
    this.bookForm.markAllAsTouched();
    if (this.bookForm.valid) {
      this.save.emit(this.bookForm.getRawValue());
    }
  }

}
