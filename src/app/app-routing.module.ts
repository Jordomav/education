import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {ClassListComponent} from './class-list/class-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'classes', component: ClassListComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
