import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { Course } from '../shared/course.model';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.css',
})
export class CourseDialogComponent {
  description: string;

  form = this.formBuilder.group({
    description: [this.course.description, Validators.required],
    category: [this.course.category, Validators.required],
    releasedAt: [new Date(), Validators.required],
    longDescription: [this.course.longDescription, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private course: Course, 
    private dialogRef: MatDialogRef<Course>
  ) {
    this.description = course.description;
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}

export function openEditCourseDialog(dialog: MatDialog, course: Course) {
  const config = new MatDialogConfig();
  config.disableClose = true;
  config.autoFocus = true;
  config.data = {
    ...course,
  };
  const dialogRef = dialog.open(CourseDialogComponent, config);
  return dialogRef.afterClosed();
}
