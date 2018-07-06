import {Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HighlightJsService} from 'angular2-highlight-js';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  private sub: any;
  part: number;

  constructor(private route: ActivatedRoute, private el: ElementRef, private service: HighlightJsService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.part = +params['part'];
    });
  }

}
