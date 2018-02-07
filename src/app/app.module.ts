import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { ClassListComponent } from './class-list/class-list.component';
import { Web4begComponent } from './courses/web4beg/web4beg.component';
import { IonicIntroComponent } from './courses/ionic-intro/ionic-intro.component';
import { NodeIntroComponent } from './courses/node-intro/node-intro.component';
import { PhpIntroComponent } from './courses/php-intro/php-intro.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassListComponent,
    Web4begComponent,
    IonicIntroComponent,
    NodeIntroComponent,
    PhpIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighlightJsModule,
  ],
  providers: [
    HighlightJsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
