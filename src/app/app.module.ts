import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ClassListComponent } from './class-list/class-list.component';
import { Web4begComponent } from './courses/web4beg/web4beg.component';
import { IonicIntroComponent } from './courses/ionic-intro/ionic-intro.component';
import { NodeIntroComponent } from './courses/node-intro/node-intro.component';
import { PhpIntroComponent } from './courses/php-intro/php-intro.component';
import { WebPart1Component } from './courses/web4beg/parts/web-part1/web-part1.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { CodeIgniterComponent } from './courses/code-igniter/code-igniter.component';
import { CodeigniterPart1Component } from './courses/code-igniter/parts/codeigniter-part1/codeigniter-part1.component';
import { IonicPart1Component } from './courses/ionic-intro/parts/ionic-part1/ionic-part1.component';
import { AngularComponent } from './courses/angular/angular.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassListComponent,
    Web4begComponent,
    IonicIntroComponent,
    NodeIntroComponent,
    PhpIntroComponent,
    WebPart1Component,
    RouteNotFoundComponent,
    CodeIgniterComponent,
    CodeigniterPart1Component,
    IonicPart1Component,
    AngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighlightJsModule,
    FormsModule,
  ],
  providers: [
    HighlightJsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
