import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-node-intro',
  templateUrl: './node-intro.component.html',
  styleUrls: ['./node-intro.component.css']
})
export class NodeIntroComponent implements OnInit {
  private sub: any;
  day: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.day = +params['day'];
    });
  }
}
