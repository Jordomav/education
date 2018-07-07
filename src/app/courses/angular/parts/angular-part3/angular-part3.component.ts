import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-part3',
  templateUrl: './angular-part3.component.html',
  styleUrls: ['./angular-part3.component.css']
})
export class AngularPart3Component implements OnInit {

  constructor() { }

  genContact = `<pre><code class="highlight">ng generate component contact</code></pre>`;

  routingModule = `
  <pre><code class="highlight typescript">
    import { NgModule }             from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { HomeComponent } from './home/home.component';
    import { ContactComponent } from './contact/contact.component';
     
    const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: '/contact', component: ContactComponent },
    ];
     
    @NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
    })
    export class AppRoutingModule {}
    </code></pre>
`;

  appHtml = `
  <pre><code class="highlight html">
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
              &lt;li&gt;&lt;a routerLink="/contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/nav&gt;
      &lt;router-outlet&gt;&lt;/router-outlet&gt;
    </code></pre>
  `;

  genContactClass = `<pre><code class="highlight">ng generate class contact</code></pre>`;

  contactClass = `
  <pre><code class="highlight typescript">
  export class Contact {
    id: number;
    name: string;
    phone: string;
    email: string;
  }
  </code></pre>
  `;


  ngOnInit() {
  }

}
