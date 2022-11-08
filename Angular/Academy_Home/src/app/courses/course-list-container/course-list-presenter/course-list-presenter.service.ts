import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Course } from '../../course.model';
import { CourseService } from '../../course.service';

@Injectable()
export class CourseListPresenterService {

  public patchdata$: Observable<Course>;
  private patchdata: Subject<Course> = new Subject();
  
  constructor(private courseService: CourseService) { 
    this.patchdata$ = this.patchdata.asObservable();
  }

  // getCourseById(courseId:number):any{
  //   this.courseService.getCoursesById(courseId).subscribe((res)=>{
  //     this.patchdata.next(res)
  //     console.log(res);
  //   });
  // }
}
