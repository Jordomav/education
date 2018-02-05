import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {ClassListComponent} from './class-list/class-list.component';
import {Web4begComponent} from './courses/web4beg/web4beg.component';
import {IonicIntroComponent} from './courses/ionic-intro/ionic-intro.component';
import {NodeIntroComponent} from './courses/node-intro/node-intro.component';
import {PhpIntroComponent} from './courses/php-intro/php-intro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'classes', component: ClassListComponent },
  { path: 'courses/websitesforbeginners', component: Web4begComponent },
  { path: 'courses/introionic', component: IonicIntroComponent },
  { path: 'courses/intronode', component: NodeIntroComponent },
  { path: 'courses/introphp', component: PhpIntroComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
