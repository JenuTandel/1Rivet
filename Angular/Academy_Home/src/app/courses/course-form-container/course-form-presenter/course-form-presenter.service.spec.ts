import { TestBed } from '@angular/core/testing';

import { CourseFormPresenterService } from './course-form-presenter.service';

describe('CourseFormPresenterService', () => {
  let service: CourseFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
