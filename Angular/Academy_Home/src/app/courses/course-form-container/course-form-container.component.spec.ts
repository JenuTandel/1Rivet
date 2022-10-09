import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormContainerComponent } from './course-form-container.component';

describe('CourseFormContainerComponent', () => {
  let component: CourseFormContainerComponent;
  let fixture: ComponentFixture<CourseFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseFormContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
