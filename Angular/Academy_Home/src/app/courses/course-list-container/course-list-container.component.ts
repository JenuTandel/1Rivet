import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CourseFormPresenterService } from '../course-form-container/course-form-presenter/course-form-presenter.service';
import { Course, Pagination } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list-container',
  templateUrl: './course-list-container.component.html',
  styleUrls: ['./course-list-container.component.scss']
})
export class CourseListContainerComponent implements OnInit {

  public patchdata$: Observable<any>;
  private patchdata: Subject<Course> = new Subject();
  // throttle = 0;
  // distance = 2;
  // page = 1;
  // pageSize = 10;

  public orderDataList$!: Observable<Course[]>;

  public message: Subject<string> = new Subject();

  public message$: Observable<string>;
  public tableProperty: Pagination;

  constructor(
    private courseService: CourseService,
    // private courseFormPresenterService:CourseFormPresenterService
  ) {
    this.message$ = this.message.asObservable();
    this.tableProperty = new Pagination();
    this.patchdata$ = this.patchdata.asObservable();
  }

  ngOnInit() {
    // this.getOrderDtails();
  }
  public deleteCourse(courseId: number): void {
    this.courseService.deleteCourse(courseId).subscribe(response => {
      if (response) {
        this.message.next('delete');
        this.orderDataList$ = this.courseService.getCourses(this.tableProperty);
      }
    });
  }

  getCourseDetails(tableProperty: Pagination) {
    this.tableProperty = tableProperty;
    this.orderDataList$ = this.courseService.getCourses(tableProperty);
  }

  public getCourseById(course: any): void {
    this.patchdata$ = this.courseService.getCoursesById(course.id);
  }
}
