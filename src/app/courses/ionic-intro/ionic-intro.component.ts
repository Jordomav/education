import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ionic-intro',
  templateUrl: './ionic-intro.component.html',
  styleUrls: ['./ionic-intro.component.css']
})
export class IonicIntroComponent implements OnInit {
  private sub: any;
  part: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.part = +params['part'];
      console.log(this.part);
    });
  }
}
