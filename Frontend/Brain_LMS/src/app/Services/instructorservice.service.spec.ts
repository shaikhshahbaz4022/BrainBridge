import { TestBed } from '@angular/core/testing';

import { InstructorserviceService } from './instructorservice.service';

describe('InstructorserviceService', () => {
  let service: InstructorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
