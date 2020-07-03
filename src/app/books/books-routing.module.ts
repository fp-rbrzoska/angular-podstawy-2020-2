import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksItemDetailsComponent } from './books-item-details/books-item-details.component';
import { BooksAddComponent } from './books-add/books-add.component';
import { BooksEditComponent } from './books-edit/books-edit.component';


const routes: Routes = [
  { path: '', component: BooksListComponent },
  { path: 'add', component: BooksAddComponent },
  { path: ':id/edit', component: BooksEditComponent },
  { path: ':id', component: BooksItemDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
