import { TestBed } from '@angular/core/testing';

import { Enquiryserv } from './enquiryserv';

describe('Enquiryserv', () => {
  let service: Enquiryserv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Enquiryserv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
