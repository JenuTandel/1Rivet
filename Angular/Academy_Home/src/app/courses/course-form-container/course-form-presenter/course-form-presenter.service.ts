import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Course } from '../../course.model';

@Injectable()
export class CourseFormPresenterService {

  public add$: Observable<Course>;
  private add: Subject<Course> = new Subject();

  constructor(private fb: FormBuilder) {
    this.add$ = this.add.asObservable();
  }

  public buildForm(): FormGroup {
    return this.fb.group({
      id: [''],
      courseName: ['', [Validators.required]],
      courseDetails: ['', [Validators.required]],
      courseDuration: ['', [Validators.required]],
    });
  }

  public bindControlValue(courseForm: FormGroup, course: Course): FormGroup {
    if (course) {
      courseForm.patchValue(course);
    }
    return courseForm;
  }

  public saveCourse(courseForm: FormGroup): void {
    if (courseForm.valid) {
      this.add.next(courseForm.value);
    } else {
    }
  }
}