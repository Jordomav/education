import {Component, ElementRef, OnInit} from '@angular/core';
import {HighlightJsService} from 'angular2-highlight-js';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-code-igniter',
  templateUrl: './code-igniter.component.html',
  styleUrls: ['./code-igniter.component.css']
})
export class CodeIgniterComponent implements OnInit {
  private sub: any;
  part: number;

  constructor(private route: ActivatedRoute, private el: ElementRef, private service: HighlightJsService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.part = +params['part'];
    });
  }
}
