import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Course } from '../shared/course.model';
import { Observable, map } from 'rxjs';
import { Lesson } from '../shared/lesson.model';

@Injectable({ providedIn: 'root' })
export class CourseService {

  findLessons(
    courseId: number,
    sortOrder = 'asc',
    pageNumber = 0,
    pageSize = 3,
    sortColumn = 'seqNo'
  ): Observable<Lesson[]> {
    return this.http.get<{payload:Lesson[]}>('http://localhost:9000/api/lessons', {
      params: new HttpParams()
          .set('courseId', courseId.toString())
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString())
          .set('sortColumn', sortColumn)
  }).pipe(
      map(res =>  res["payload"])
  );
  }

  constructor(private http: HttpClient) {}

  // getAllCourses() {
  //   return this.http.get<Course[]>(
  //     'https://testproj-2715e-default-rtdb.asia-southeast1.firebasedatabase.app/courses.json'
  //   );
  // }

  findAllCourses() {
    return this.http
      .get<{payload: Course[]}>('http://localhost:9000/api/courses')
      .pipe(map((response) => response['payload']));
  }

  findCourse(courseId: string) {
    return this.http.get<Course>(
      'http://localhost:9000/api/courses/' + courseId
    );
  }
}

