import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTestComponent } from './my-test/my-test.component';
import { ObservablesComponent } from './observables/observables.component';


const routes: Routes = [
  { path: '', component: MyTestComponent },
  { path: 'observables', component: ObservablesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
