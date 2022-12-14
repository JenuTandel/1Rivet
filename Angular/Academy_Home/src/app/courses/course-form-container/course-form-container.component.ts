import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, Observable, Subject, switchMap } from 'rxjs';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-form-container',
  templateUrl: './course-form-container.component.html',
  styleUrls: ['./course-form-container.component.scss']
})
export class CourseFormContainerComponent implements OnInit {

  // @Input() formValue: any;

  public course$: Observable<Course> =
    this.activatedRoute.paramMap.pipe(
      filter(params => params.has('id')),
      switchMap(params => this.courseService.getCoursesById(Number(params.get('id')))),
    );
  public message: Subject<string> = new Subject();

  public message$: Observable<string>;
  constructor(private courseService: CourseService, private activatedRoute: ActivatedRoute) {
    this.message$ = this.message.asObservable();
  }

  ngOnInit() {
    // this.patchData();
  }

  public addCourse(course: Course): void {

    this.courseService.createCourse(course).subscribe(response => {
      if (response) {
        this.message.next('add');
      }
    });
  }

  public updateCourse(course: Course): void {

    this.courseService.updateCourse(course).subscribe(response => {
      console.log("Res" + response);

      if (response) {
        this.message.next('update');
      }
    });
  }

  // public patchData(): void {
  //   this.courseListPresenterService.patchdata$.subscribe((res) => {
  //     console.log(res);
  //   })
  // }


}
