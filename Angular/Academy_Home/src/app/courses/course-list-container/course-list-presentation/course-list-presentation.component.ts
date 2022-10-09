import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CourseFormContainerComponent } from '../../course-form-container/course-form-container.component';
import { Course } from '../../course.model';

@Component({
  selector: 'app-course-list-presentation',
  templateUrl: './course-list-presentation.component.html',
  styleUrls: ['./course-list-presentation.component.scss']
})
export class CourseListPresentationComponent implements OnInit {

  /** This property is used for get data from container component */
  @Input() public set baseResponse(baseResponse: Course[]) {
    if (baseResponse) {
      this._baseResponse = baseResponse;
    }
  }
  public get baseResponse(): Course[] {
    return this._baseResponse;
  }
  private _baseResponse: Course[];

  @Output() public deleteEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private courseContainer: CourseFormContainerComponent,
    private toastr: ToastrService, private router: Router) {
    this._baseResponse = [];
  }

  ngOnInit() {
  }
  public deleteCourse(deleteId: any): void {
    this.deleteEvent.emit(deleteId);
    this.courseContainer.message$.subscribe((response) => {
      if (response.toLowerCase() === 'delete') {
        this.toastr.success('Course delete successfully', 'Success');
      }
      this.router.navigate(['/courses/list']);
    });
  }

}
