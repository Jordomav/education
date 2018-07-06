import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-part2',
  templateUrl: './angular-part2.component.html',
  styleUrls: ['./angular-part2.component.css']
})
export class AngularPart2Component implements OnInit {

  constructor() { }

  ngRouting = `
  <pre>
    <code class="highlight">
    ng generate module app-routing --flat --module=app
    </code>
  </pre>
  `;

  routingModule = `
  <pre>
    <code class="highlight typescript">
    import { NgModule }             from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
     
    const routes: Routes = [
      
    ];
     
    @NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
    })
    export class AppRoutingModule {}
    </code>
  </pre>
  `;

  appHtml = `
  <pre>
    <code class="highlight html">
    &lt;nav class="navbar navbar-default navbar-fixed-top" style="margin-bottom: 70px;"&gt;
        &lt;div class="container-fluid"&gt;
          &lt;div class="navbar-header"&gt;
            &lt;button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"&gt;
              &lt;span class="icon-bar"&gt;&lt;/span&gt;
              &lt;span class="icon-bar"&gt;&lt;/span&gt;
              &lt;span class="icon-bar"&gt;&lt;/span&gt;
            &lt;/button&gt;
          &lt;/div&gt;
          &lt;div class="collapse navbar-collapse" id="myNavbar"&gt;
            &lt;ul class="nav navbar-nav"&gt;
              &lt;li&gt;&lt;a routerLink="/"&gt;Home&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
            &lt;ul class="nav navbar-nav navbar-right"&gt;
              
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/nav&gt;
      &lt;router-outlet&gt;&lt;/router-outlet&gt;
    </code>
  </pre>
  `;

  homeComp = `
  <pre>
    <code class="highlight">
    ng generate component home
    </code>
  </pre>
  `;

  homeRouting = `
  <pre>
    <code class="highlight typescript">
    const routes: Routes = [
      { path: '', component: HomeComponent },
    ];
    </code>
  </pre>
  `;

  homeHtml = `
  <pre>
    <code class="highlight html">
    &lt;div class="container"&gt;
      &lt;div class="row"&gt;
        &lt;h1 class="text-center"&gt;{{ greeting }}&lt;/h1&gt;
      &lt;/div&gt;
      &lt;div class="row"&gt;
        &lt;p class="text-center"&gt;{{ introduction }}&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    </code>
  </pre>
  `;

  homeTs = `
  <pre>
    <code class="highlight typescript">
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'app-home',
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.css']
    })
    export class HomeComponent implements OnInit {
    
      constructor() { }
      
      greeting = 'Welcome to my Angular App';
      introduction = 'A collection of various Angular applications';
    
      ngOnInit() {
      }
    
    }
    </code>
  </pre>
  `;

  ngOnInit() {
  }

}
