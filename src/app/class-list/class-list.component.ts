import { Component, OnInit } from '@angular/core';
import {COURSES} from '../mock-courses';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  classes = COURSES;

  constructor() { }

  ngOnInit() {
  }

}
