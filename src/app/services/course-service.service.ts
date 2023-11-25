import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Course } from '../shared/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  constructor(private http: HttpClient) {}

  getAllCourses() {
    return this.http.get<Course[]>(
      'https://testproj-2715e-default-rtdb.asia-southeast1.firebasedatabase.app/courses.json'
    );
  }
}
