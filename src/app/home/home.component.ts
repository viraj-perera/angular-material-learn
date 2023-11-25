import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course-service.service';
import { Observable, map } from 'rxjs';
import { Course } from '../shared/course.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]> | undefined;
  advancedCourses$: Observable<Course[]> | undefined;


  constructor(private courseService: CourseService){}

  ngOnInit(): void {
    const allCourses$ = this.courseService.getAllCourses();
    
    this.beginnerCourses$ = allCourses$.pipe(
      map(courses => {
        return courses.filter((course:Course) =>{ return course.type === "beginner"});
      })
    );

    this.advancedCourses$ = allCourses$.pipe(
      map(courses => {
        return courses.filter((course:Course) =>{ return course.type === "advanced"});
      })
    );
  }

}
