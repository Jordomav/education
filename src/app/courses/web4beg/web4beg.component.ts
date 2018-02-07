import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'app-web4beg',
  templateUrl: './web4beg.component.html',
  styleUrls: ['./web4beg.component.css']
})
export class Web4begComponent implements OnInit, AfterViewInit {
  private sub: any;
  day: number;
  constructor(private route: ActivatedRoute, private el: ElementRef, private service: HighlightJsService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.day = +params['day'];
    });
  }
  ngAfterViewInit() {
    // this.service.highlight(this.el.nativeElement.querySelector('.typescript'));
  }

}
