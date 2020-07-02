import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyTestComponent } from './my-test/my-test.component';
import { ErrorComponent } from './error/error.component';
import { ObservablesComponent } from './observables/observables.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: MyTestComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
