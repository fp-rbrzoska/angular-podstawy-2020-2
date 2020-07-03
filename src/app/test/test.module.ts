import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { MyTestComponent } from './my-test/my-test.component';
import { MyTestChildComponent } from './my-test-child/my-test-child.component';
import { ObservablesComponent } from './observables/observables.component';


@NgModule({
  declarations: [ MyTestComponent, MyTestChildComponent, ObservablesComponent ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
