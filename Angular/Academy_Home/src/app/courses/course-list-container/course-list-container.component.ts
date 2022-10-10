import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list-container',
  templateUrl: './course-list-container.component.html',
  styleUrls: ['./course-list-container.component.scss']
})
export class CourseListContainerComponent implements OnInit {

  public orderDataList$!: Observable<Course[]>;

  public message: Subject<string> = new Subject();

  public message$: Observable<string>;


  constructor(
    private courseService: CourseService
  ) {
    this.message$ = this.message.asObservable();
  }

  ngOnInit() {
    this.orderDataList$= this.courseService.getCourses();
  }
  public deleteCourse(courseId: number): void {
    this.courseService.deleteCourse(courseId).subscribe(response => {
      if (response) {
        this.message.next('delete');
        this.orderDataList$ = this.courseService.getCourses();
      }
    });
  }
}
