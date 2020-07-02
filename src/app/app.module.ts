import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyTestComponent } from './my-test/my-test.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ErrorComponent } from './error/error.component';
import { MyTestChildComponent } from './my-test-child/my-test-child.component';
import { TestService } from  './test.service';
import { ObservablesComponent } from './observables/observables.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyTestComponent,
    NavigationComponent,
    ErrorComponent,
    MyTestChildComponent,
    ObservablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
