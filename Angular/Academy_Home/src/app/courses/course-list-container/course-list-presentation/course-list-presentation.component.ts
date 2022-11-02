import { AfterContentChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { DialogService } from 'src/app/shared/dialog.service';
import { CourseFormContainerComponent } from '../../course-form-container/course-form-container.component';
import { Course } from '../../course.model';
import { CourseListPresenterService } from '../course-list-presenter/course-list-presenter.service';

@Component({
  selector: 'app-course-list-presentation',
  templateUrl: './course-list-presentation.component.html',
  viewProviders:[CourseListPresenterService],
  styleUrls: ['./course-list-presentation.component.scss']
})
export class CourseListPresentationComponent implements OnInit, AfterContentChecked {

  

  @Input() public set baseResponse(baseResponse: Course[]|null) {
    if (baseResponse) {
      this._baseResponse = baseResponse;
    }
    console.log(this.baseResponse);
  }
  public get baseResponse(): Course[] {
    return this._baseResponse;
  }
  private _baseResponse: Course[];
  public course:boolean = false;

  @Output() public deleteEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private dialogService:DialogService,
    private courseListPresenterService:CourseListPresenterService,
    private toastr: ToastrService, private router: Router) {
    this._baseResponse = [];
  }
  ngAfterContentChecked(): void {
    const role = localStorage.getItem('role');
    if(role == "admin"){
      this.course = true;
    }
    else{
      this.course = false;
    }
  }

  ngOnInit() {
  }
  public deleteCourse(deleteId?: number): void {
    this.deleteEvent.emit(deleteId);
    // this.courseContainer.message$.subscribe((response) => {
    //   if (response.toLowerCase() === 'delete') {
    //     this.toastr.success('Course delete successfully', 'Success');
    //   }
    //   this.router.navigate(['/courses/list']);
    // });
  }

  AddNewCourse(){
    this.dialogService.openDialog(CourseFormContainerComponent)
  }


}
