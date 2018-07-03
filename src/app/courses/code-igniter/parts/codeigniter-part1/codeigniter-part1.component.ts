import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codeigniter-part1',
  templateUrl: './codeigniter-part1.component.html',
  styleUrls: ['./codeigniter-part1.component.css']
})
export class CodeigniterPart1Component implements OnInit {

  constructor() { }

  htaccess = `
  <pre>
    <code class="highlight">
    RewriteEngine on
    RewriteCond $1 !^(index\\.php|public|css\\.txt)
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)$ index.php?$1
    </code>
  </pre>
  `;

  ngOnInit() {
  }

}
