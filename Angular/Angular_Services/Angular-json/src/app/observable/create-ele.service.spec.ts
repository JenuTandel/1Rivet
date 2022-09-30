import { TestBed } from '@angular/core/testing';

import { CreateEleService } from './create-ele.service';

describe('CreateEleService', () => {
  let service: CreateEleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateEleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
