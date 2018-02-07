import { Course } from './course';

export const COURSES: Course[] = [
  {id: 1, name: 'Websites for Beginners', desc: 'Learn to build a basic one page website using HTML and CSS principles.', color: '#e34f26', tags: ['HTML', 'CSS'], route: '/courses/websitesforbeginners/1'},
  {id: 2, name: 'Introduction to App Development', desc: 'Make a basic 3 page application using the Ionic Framework.', color: '#488aff', tags: ['HTML', 'CSS', 'Ionic', 'Apps', 'TypeScript'], route: '/courses/introionic/1'},
  {id: 3, name: 'Introduction to Node.js', desc: 'Learn to make a basic server using Node.js and Express.', color: '#215732', tags: ['JavaScript', 'Node', 'Express'], route: '/courses/intronode/1'},
  {id: 4, name: 'Introduction to PHP', desc: 'Learn the basics of PHP.', color: '#4f5b93', tags: ['PHP'], route: '/courses/introphp/1'}
];
