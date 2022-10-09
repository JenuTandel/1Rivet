import { TestBed } from '@angular/core/testing';

import { CourseListPresenterService } from './course-list-presenter.service';

describe('CourseListPresenterService', () => {
  let service: CourseListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
