import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
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

  @Input() set courseDetails(value: Course | null) {

    // this._courseData = value;
    if (value) {
      this.courseForm = this.coursePresenter.
        bindControlValue(this.courseForm,
          value);
    }
  }

  get courseDetails(): Course {
    return this._courseData;
  }

  constructor(private coursePresenter: CourseFormPresenterService, private toastr: ToastrService,
    private courseContainer: CourseFormContainerComponent, private router: Router) {
    this.destroy = new Subject();
    this.add = new EventEmitter();
    this.update = new EventEmitter();
    this.courseForm = this.coursePresenter.buildForm();
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
  public course(): void {
    this.coursePresenter.saveCourse(this.courseForm);
    this.courseContainer.message$.pipe(takeUntil(this.destroy)).subscribe((response: any) => {
      if (response.toLowerCase() === 'update') {
        this.toastr.success('Course Update Successfully', 'Success');
      } else {
        this.toastr.success('Course Successfully Submitted', 'Success');
      }
      this.router.navigate(['/courses/list']);
    });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
