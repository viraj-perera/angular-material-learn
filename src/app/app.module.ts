import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { CourseCardListComponent } from './course-card-list/course-card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CreateCourseStep1Component } from './create-course/create-course-step-1/create-course-step-1.component';
import { CreateCourseStep2Component } from './create-course/create-course-step-2/create-course-step-2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    AboutComponent,
    CourseCardListComponent,
    CreateCourseComponent,
    CreateCourseStep1Component,
    CreateCourseStep2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
