import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Course } from '../shared/course.model';
import { inject } from '@angular/core';
import { CourseService } from './course.service';
import { Observable } from 'rxjs';

export const courseResolver: ResolveFn<Observable<Course>> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const coursesService = inject(CourseService);
  return coursesService.findCourse(route.params['id']);
};
