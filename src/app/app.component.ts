import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchParams: any;

  constructor(private router: Router) { }

  searchClasses() {
    this.router.navigate(['/classes'], {queryParams: {tags: this.searchParams}});
  }
}
