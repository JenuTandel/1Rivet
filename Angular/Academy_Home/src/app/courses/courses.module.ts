import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseFormContainerComponent } from './course-form-container/course-form-container.component';
import { CourseListContainerComponent } from './course-list-container/course-list-container.component';
import { CourseFormPresentationComponent } from './course-form-container/course-form-presentation/course-form-presentation.component';
import { CourseListPresentationComponent } from './course-list-container/course-list-presentation/course-list-presentation.component';
import { CourseService } from './course.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormContainerComponent,
    CourseListContainerComponent,
    CourseFormPresentationComponent,
    CourseListPresentationComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers:[CourseService]
})
export class CoursesModule { }
