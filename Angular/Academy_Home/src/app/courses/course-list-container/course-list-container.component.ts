import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Course, Pagination } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list-container',
  templateUrl: './course-list-container.component.html',
  styleUrls: ['./course-list-container.component.scss']
})
export class CourseListContainerComponent implements OnInit {

  // throttle = 0;
  // distance = 2;
  // page = 1;
  // pageSize = 10;

  public orderDataList$!: Observable<Course[]>;

  public message: Subject<string> = new Subject();

  public message$: Observable<string>;
  public tableProperty:Pagination;

  constructor(
    private courseService: CourseService
  ) {
    this.message$ = this.message.asObservable();
    this.tableProperty = new Pagination();
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

  getCourseDetails(tableProperty:Pagination){
    this.tableProperty = tableProperty;
    this.orderDataList$= this.courseService.getCourses(tableProperty);

  }
 
}
