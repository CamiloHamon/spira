import { TestBed } from '@angular/core/testing';

import { DeleteCursoService } from './delete-curso.service';

describe('DeleteCursoService', () => {
  let service: DeleteCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
