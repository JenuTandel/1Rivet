import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { DialogService } from 'src/app/shared/dialog.service';
import { Course } from '../../course.model';
import { CourseFormContainerComponent } from '../course-form-container.component';
import { CourseFormPresenterService } from '../course-form-presenter/course-form-presenter.service';

@Component({
  selector: 'app-course-form-presentation',
  templateUrl: './course-form-presentation.component.html',
  styleUrls: ['./course-form-presentation.component.scss'],
  viewProviders: [CourseFormPresenterService]
})
export class CourseFormPresentationComponent implements OnInit {

  public courseForm: FormGroup;
  private _courseData!: Course;
  @Output() add: EventEmitter<Course>;
  @Output() update: EventEmitter<Course>;
  private destroy: Subject<void>;
  public imageFile!:File;
  public base64:any;
  public image:any;

  @Input() set courseDetails(value: Course | null) {
    if (value) {
      this._courseData = value;
      this.courseForm = this.coursePresenter.
        bindControlValue(this.courseForm,
          this._courseData);
    }
  }
  get courseDetails(): Course {
    return this._courseData;
  }

  constructor(private coursePresenter: CourseFormPresenterService, private toastr: ToastrService,
    private courseContainer: CourseFormContainerComponent, private router: Router,
    private dialogService:DialogService) {
    this.destroy = new Subject();
    this.add = new EventEmitter();
    this.update = new EventEmitter();
    this.courseForm = this.coursePresenter.buildForm();
    this.base64='';

  }

  ngOnInit(): void {
    this.coursePresenter.add$.pipe(takeUntil(this.destroy)).subscribe((course: Course) => {
      if (this.courseDetails) {
        this.update.emit(course);
      } else {
        this.add.emit(course);
      }
    });
  }
  public courseAdd(): void {
    this.coursePresenter.saveCourse(this.courseForm);
    this.courseContainer.message$.pipe(takeUntil(this.destroy)).subscribe((response: any) => {
      if (response.toLowerCase() === 'update') {
        this.toastr.success('Course Update Successfully', 'Success');
      } else {
        this.toastr.success('Course Successfully Submitted', 'Success');
      }
      this.router.navigate(['/courses/list']);
    });

    this.dialogService.closeDialog.next(true)
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  ImageUploaded(event:any){
    this.imageFile=event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(this.imageFile);
    reader.onload = () => {
      this.base64 = String(reader.result);
    }
  }
}
