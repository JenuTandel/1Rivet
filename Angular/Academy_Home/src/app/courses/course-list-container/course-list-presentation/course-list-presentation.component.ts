import { AfterContentChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { DialogService } from 'src/app/shared/dialog.service';
import { CourseFormContainerComponent } from '../../course-form-container/course-form-container.component';
import { CourseFormPresentationComponent } from '../../course-form-container/course-form-presentation/course-form-presentation.component';
import { CourseFormPresenterService } from '../../course-form-container/course-form-presenter/course-form-presenter.service';
import { Course, Pagination } from '../../course.model';
import { CourseListPresenterService } from '../course-list-presenter/course-list-presenter.service';

@Component({
  selector: 'app-course-list-presentation',
  templateUrl: './course-list-presentation.component.html',
  viewProviders: [CourseListPresenterService],
  styleUrls: ['./course-list-presentation.component.scss']
})
export class CourseListPresentationComponent implements OnInit, AfterContentChecked {
  @Input() public set baseResponse(baseResponse: Course[] | null) {
    if (baseResponse) {
      // this._baseResponse.map((item)=>{
      //   console.log(item.hits);
      // })
      debugger
      this._baseResponse = this._baseResponse.concat(baseResponse);
      // this._baseResponse.push(...baseResponse);
    }
  }
  public get baseResponse(): Course[] {
    return this._baseResponse;
  }

  @Input() public set patchData(baseResponse: Course | null) {
    if (baseResponse) {
      this._patchData = baseResponse
      setTimeout(() => {
        const patchData = this.dialogService.openDialog(CourseFormContainerComponent);
        console.log(patchData.instance);
        patchData.instance.courseForm.patchValue(this._patchData) 

      }, 500);
      console.log(this._patchData);
    }
  }
  public get patchData(): Course {
    return this._patchData;
  }
  private _baseResponse: Course[];
  private _patchData!: Course;

  public course: boolean = false;
  public tableProperty: Pagination;
  distance = 2;
  throttle = 0;

  @Output() public deleteEvent: EventEmitter<number> = new EventEmitter<number>();

  @Output() public getCourseDetails: EventEmitter<Pagination>;

  @Output() public courseId: EventEmitter<number> = new EventEmitter<number>();
  constructor(
    private dialogService: DialogService,
    private courseListPresenterService: CourseListPresenterService,
    private toastr: ToastrService, private router: Router) {
    this._baseResponse = [];
    this.tableProperty = new Pagination();
    this.tableProperty.pageNumber = 1;
    this.tableProperty.pageSize = 20;
    this.getCourseDetails = new EventEmitter<Pagination>();
  }
  ngAfterContentChecked(): void {
    const role = localStorage.getItem('role');
    if (role == "admin") {
      this.course = true;
    }
    else {
      this.course = false;
    }
  }

  ngOnInit() {
    this.getCourseDetails.emit(this.tableProperty);
  }
  public deleteCourse(deleteId?: number): void {
    this.deleteEvent.emit(deleteId);
  }

  public EditCourse(course: any): void {
    debugger
    this.courseId.emit(course);
    // this.courseListPresenterService.getCourseById(course.id);
   
    // patchData.instance.updateCourse(course);
    // patchData.instance.courseForm.patchValue(course) 
  }

  AddNewCourse() {
    this.dialogService.openDialog(CourseFormContainerComponent)
  }

  onScroll() {
    this.tableProperty.pageNumber++;
    this.getCourseDetails.emit(this.tableProperty);

  }
}
