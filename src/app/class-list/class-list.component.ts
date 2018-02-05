import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  classes = [
    {id: 1, name: 'Websites for Beginners', color: '#e34f26', tags: ['HTML', 'CSS']},
    {id: 2, name: 'Introduction to App Development', color: '#488aff', tags: ['HTML', 'CSS', 'Ionic', 'Apps', 'TypeScript']},
    {id: 3, name: 'Introduction to Node.js', color: '#215732', tags: ['JavaScript', 'Node', 'Express']},
    {id: 3, name: 'Introduction to PHP', color: '#4f5b93', tags: ['PHP']}
  ];

  constructor() { }

  ngOnInit() {
  }

}
