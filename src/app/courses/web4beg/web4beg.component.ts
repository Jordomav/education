import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-web4beg',
  templateUrl: './web4beg.component.html',
  styleUrls: ['./web4beg.component.css']
})
export class Web4begComponent implements OnInit {
  private sub: any;
  day: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.day = +params['day'];
    });
  }

}
