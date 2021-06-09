import { TestBed } from '@angular/core/testing';

import { VerUsersService } from './ver-users.service';

describe('VerUsersService', () => {
  let service: VerUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
