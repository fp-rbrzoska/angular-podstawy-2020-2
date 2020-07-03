import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BooksService } from './books.service';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksItemComponent } from './books-item/books-item.component';
import { BooksItemDetailsComponent } from './books-item-details/books-item-details.component';
import { BooksFormComponent } from './books-form/books-form.component';
import { BooksAddComponent } from './books-add/books-add.component';
import { BooksEditComponent } from './books-edit/books-edit.component';


@NgModule({
  declarations: [BooksListComponent, BooksItemComponent, BooksItemDetailsComponent, BooksFormComponent, BooksAddComponent, BooksEditComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ],
  providers: [BooksService]
})
export class BooksModule { }
