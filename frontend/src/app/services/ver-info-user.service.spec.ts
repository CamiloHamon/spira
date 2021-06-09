import { TestBed } from '@angular/core/testing';

import { VerInfoUserService } from './ver-info-user.service';

describe('VerInfoUserService', () => {
  let service: VerInfoUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerInfoUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
