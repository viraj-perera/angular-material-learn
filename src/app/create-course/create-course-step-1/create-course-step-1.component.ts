import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-create-course-step-1',
  templateUrl: './create-course-step-1.component.html',
  styleUrl: './create-course-step-1.component.css',
})
export class CreateCourseStep1Component {
  constructor(private formBuilder: FormBuilder) {}

  form = this.formBuilder.group({
    title: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(60)],
    ],
    releasedAt: [new Date(), Validators.required],
    category: ['Beginner', Validators.required],
    courseType: ['Premium', Validators.required],
    downloadsAllowed : [false, Validators.requiredTrue], 
    longDescription: ['', [Validators.required, Validators.minLength(5)]]
  });

  get courseTitle(){
    return this.form.controls['title'];
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    const providedDate = cellDate.getDate();
    console.log('view: '+view + '::'+ (providedDate === 1));
    if(view === 'month'){
      return (providedDate === 1) ||  (providedDate === 15)? 'highlight-date':'';
    }
    return '';
  }
}
