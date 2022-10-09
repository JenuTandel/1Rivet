import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseFormContainerComponent } from './course-form-container/course-form-container.component';
import { CourseListContainerComponent } from './course-list-container/course-list-container.component';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'list'
      },
      {
        path:'list',
        component:CourseListContainerComponent
      },
      {
        path:'add',
        component:CourseFormContainerComponent
      },
      {
        path:'edit:id',
        component:CourseFormContainerComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
