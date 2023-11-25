import { Component, Input } from '@angular/core';
import { Course } from '../shared/course.model';

@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrl: './course-card-list.component.css'
})
export class CourseCardListComponent {
  @Input()
  courses: Course[] | any;

  editCourse(course: Course){}
}
