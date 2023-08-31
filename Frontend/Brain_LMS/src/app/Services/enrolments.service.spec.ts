import { TestBed } from '@angular/core/testing';

import { EnrolmentsService } from './enrolments.service';

describe('EnrolmentsService', () => {
  let service: EnrolmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrolmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
