import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {ClassListComponent} from './class-list/class-list.component';
import {Web4begComponent} from './courses/web4beg/web4beg.component';
import {IonicIntroComponent} from './courses/ionic-intro/ionic-intro.component';
import {NodeIntroComponent} from './courses/node-intro/node-intro.component';
import {PhpIntroComponent} from './courses/php-intro/php-intro.component';
import {RouteNotFoundComponent} from './route-not-found/route-not-found.component';
import {CodeIgniterComponent} from './courses/code-igniter/code-igniter.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'classes', component: ClassListComponent },
  { path: 'classes/:tags', component: ClassListComponent },
  { path: 'courses/websitesforbeginners/:part', component: Web4begComponent },
  { path: 'courses/introionic/:part', component: IonicIntroComponent },
  { path: 'courses/intronode/:part', component: NodeIntroComponent },
  { path: 'courses/introphp/:part', component: PhpIntroComponent },
  { path: 'courses/codeigniter/:part', component: CodeIgniterComponent },
  { path: '**', component: RouteNotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
