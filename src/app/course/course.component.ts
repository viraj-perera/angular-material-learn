import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Course } from '../shared/course.model';
import { CourseService } from '../services/course.service';
import { catchError, finalize, map, merge, tap, throwError } from 'rxjs';
import { Lesson } from '../shared/lesson.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent implements OnInit, AfterViewInit {

  course?: Course;
  displayedColumns = ['select', 'seqNo', 'description', 'duration'];
  lessons: Lesson[] = [];
  isLoading = false;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  expandedLesson: Lesson;
  selection = new SelectionModel(true, []);

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    //this.course = this.route.snapshot.data['course'];

    this.route.data.subscribe((data: Data) => {
      this.course = data['course'];
    });
    this.getLessons();
  }

  getLessons() {
    this.isLoading = true;
    return this.courseService
      .findLessons(
        +this.course?.id!,
        this.sort?.direction ?? 'asc',
        this.paginator?.pageIndex ?? 0,
        this.paginator?.pageSize ?? 5
      )
      .pipe(
        map((lessons) => (this.lessons = lessons)),
        catchError((err) => {
          return throwError(err);
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.paginator.page, this.sort.sortChange)
      .pipe(
        tap(() => {
          this.getLessons();
        })
      )
      .subscribe();
  }

  onToggleLesson(lesson: Lesson) {
    if (this.expandedLesson === undefined || this.expandedLesson === null) {
      this.expandedLesson = lesson;
    } else {
      this.expandedLesson = null;
    }
  }

  onLessonToggled(lesson: Lesson) {
    this.selection.toggle(lesson);
  }

  isAllSelected(): Boolean {
    return this.selection?.selected.length === this.lessons?.length;
  }

  onToggleAll() {
    if(this.isAllSelected()){
      this.selection.clear();
    } else {
      this.selection.select(...this.lessons);
    }
  }
}
