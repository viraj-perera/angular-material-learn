import { Component, Input } from '@angular/core';
import { Course } from '../shared/course.model';
import { MatDialog } from '@angular/material/dialog';
import { openEditCourseDialog } from '../course-dialog/course-dialog.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrl: './course-card-list.component.css'
})
export class CourseCardListComponent {

  @Input()
  courses: Course[] | any;

  constructor(private dialog: MatDialog){}

  editCourse(course: Course){
    openEditCourseDialog(this.dialog, course)
    .pipe(
      filter(val => !!val)
    )
    .subscribe( val => {
        console.log('value is:' , val);
      }
    );
  }
}
