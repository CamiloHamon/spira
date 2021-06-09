import { TestBed } from '@angular/core/testing';

import { AsigCursoService } from './asig-curso.service';

describe('AsigCursoService', () => {
  let service: AsigCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsigCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
