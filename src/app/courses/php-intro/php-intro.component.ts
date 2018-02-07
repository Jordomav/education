import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-php-intro',
  templateUrl: './php-intro.component.html',
  styleUrls: ['./php-intro.component.css']
})
export class PhpIntroComponent implements OnInit {
  private sub: any;
  day: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.day = +params['day'];
    });
  }
}
