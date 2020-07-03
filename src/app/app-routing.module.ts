import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, NoPreloading, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
