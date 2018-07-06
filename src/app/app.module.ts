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
import { AngularPart1Component } from './courses/angular/parts/angular-part1/angular-part1.component';
import { AngularPart2Component } from './courses/angular/parts/angular-part2/angular-part2.component';
import { AngularPart3Component } from './courses/angular/parts/angular-part3/angular-part3.component';
import { AngularPart4Component } from './courses/angular/parts/angular-part4/angular-part4.component';
import { AngularPart5Component } from './courses/angular/parts/angular-part5/angular-part5.component';
import { AngularPart6Component } from './courses/angular/parts/angular-part6/angular-part6.component';
import { AngularPart7Component } from './courses/angular/parts/angular-part7/angular-part7.component';
import { AngularPart8Component } from './courses/angular/parts/angular-part8/angular-part8.component';
import { AngularPart9Component } from './courses/angular/parts/angular-part9/angular-part9.component';
import { AngularPart10Component } from './courses/angular/parts/angular-part10/angular-part10.component';
import { AngularPart11Component } from './courses/angular/parts/angular-part11/angular-part11.component';
import { AngularPart12Component } from './courses/angular/parts/angular-part12/angular-part12.component';


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
    AngularComponent,
    AngularPart1Component,
    AngularPart2Component,
    AngularPart3Component,
    AngularPart4Component,
    AngularPart5Component,
    AngularPart6Component,
    AngularPart7Component,
    AngularPart8Component,
    AngularPart9Component,
    AngularPart10Component,
    AngularPart11Component,
    AngularPart12Component
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
