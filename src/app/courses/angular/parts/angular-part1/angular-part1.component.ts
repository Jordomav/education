import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-part1',
  templateUrl: './angular-part1.component.html',
  styleUrls: ['./angular-part1.component.css']
})
export class AngularPart1Component implements OnInit {

  constructor() { }

  ngInstall = `
  <pre>
    <code class="highlight">
    npm install -g @angular/cli
    </code>
  </pre>
  `;

  ngOnInit() {
  }

}
