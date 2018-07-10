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

  mockCotacts = `
  <pre><code class="highlight typescript">
  import { Contact } from './contact';
  
  export const CONTACTS: Contact[] = [
    { id: 1, name: 'John Doe', email: 'john@doe.com', phone: '1234567' },
    { id: 2, name: 'Jane Doe', email: 'jane@doe.com', phone: '1234567' },
    { id: 3, name: 'Jacob Smith', email: 'jacob@smith.com', phone: '1234567' },
    { id: 4, name: 'Suzy Smith', email: 'suzy@smith.com', phone: '1234567' },
    { id: 5, name: 'Will Johnson', email: 'will@johnson.com', phone: '1234567' },
    { id: 6, name: 'Jeff Nelson', email: 'jeff@nelson.com', phone: '1234567' },
    { id: 7, name: 'Mark Nelson', email: 'mark@nelson.com', phone: '1234567' },
    { id: 8, name: 'Luke Johnson', email: 'luke@johnson.com', phone: '1234567' },
    { id: 9, name: 'Chuck Smith', email: 'chucj@smith.com', phone: '1234567' },
    { id: 10, name: 'Sara Doe', email: 'sara@doe.com', phone: '1234567' },
  ];
  </code></pre>
  `;

  contactComponent = `
  <pre><code class="highlight typescript">
  import { Component, OnInit } from '@angular/core';
  import { CONTACTS } from '../mock-contacts';

  @Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
  })
  export class ContactComponent implements OnInit {
  
    contacts = CONTACTS;
    
    constructor() { }
  
    ngOnInit() {
    }
    
  }
  </code></pre>
  `;

  contactHtml = `
  <pre><code class="highlight html">
  &lt;table class="table table-striped"&gt;
    &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;ID&lt;/th&gt;
      &lt;th&gt;Name&lt;/th&gt;
      &lt;th&gt;Email&lt;/th&gt;
      &lt;th&gt;Phone&lt;/th&gt;
      &lt;th&gt;Delete&lt;/th&gt;
    &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
    &lt;tr *ngFor="let contact of contacts"&gt;
      &lt;td&gt;{{contact.id}}&lt;/td&gt;
      &lt;td&gt;{{contact.name}}&lt;/td&gt;
      &lt;td&gt;{{contact.email}}&lt;/td&gt;
      &lt;td&gt;{{contact.phone}}&lt;/td&gt;
      &lt;td&gt;&lt;a class="btn btn-danger" href=""&gt;Delete&lt;/a&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
  </code></pre>
  `;

  contactDelete = `<pre><code class="html highlight">&lt;td&gt;&lt;a class="btn btn-danger" (click)="deleteContact(contact)"&gt;Delete&lt;/a&gt;&lt;/td&gt;</code></pre>`;

  contactDelFunc = `
  <pre><code class="highlight typescript">
  deleteContact(del) {
    const remove: number = this.contacts.indexOf(del);
    if (remove !== -1) {
      this.contacts.splice(remove, 1);
    }
  }
  </code></pre>
  `;

  contactForm = `
  <pre><code class="highlight html">
  &lt;form action="POST" (ngSubmit)="addContact()"&gt;
    &lt;div class="form-group"&gt;
      &lt;label for="name"&gt;Name&lt;/label&gt;
      &lt;input type="text" class="form-control" id="name" placeholder="Name" name="name" [(ngModel)]="newContact.name"&gt;
    &lt;/div&gt;
    &lt;div class="form-group"&gt;
      &lt;label for="email"&gt;Email address&lt;/label&gt;
      &lt;input type="email" class="form-control" id="email" placeholder="Email" name="email" [(ngModel)]="newContact.email"&gt;
    &lt;/div&gt;
    &lt;div class="form-group"&gt;
      &lt;label for="phone"&gt;Phone Number&lt;/label&gt;
      &lt;input type="number" class="form-control" id="phone" placeholder="Phone" name="phone" [(ngModel)]="newContact.phone"&gt;
    &lt;/div&gt;
    &lt;button class="btn btn-success"&gt;Add Contact&lt;/button&gt;
  &lt;/form&gt;
  </code></pre>
  `;

  contactAddFunc = `
  <pre><code class="highlight typescript">
  addContact() {
    this.newContact.id = this.contacts.length + 1;
    this.contacts.push(this.newContact);
    this.newContact = new Contact();
  }
  </code></pre>`;

  contactCompUpdate = `
  <pre><code class="highlight typescript">
  import { Contact } from '../contact';
  
  newContact: Contact = new Contact();
  </code></pre>
  `;

  ngOnInit() {
  }

}
