import {Component, OnDestroy, OnInit} from '@angular/core';
import {COURSES} from '../mock-courses';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit, OnDestroy {
  private sub: any;
  classes: any;
  tags: any;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.tags = params['tags'];
      const courses = [];
      if (this.tags) {
        COURSES.forEach((course) => {
          course.tags.forEach((tag) => {
            if (tag === this.tags) {
              courses.push(course);
              this.classes = courses;
            }
          });
        });
      } else {
        this.classes = COURSES;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
