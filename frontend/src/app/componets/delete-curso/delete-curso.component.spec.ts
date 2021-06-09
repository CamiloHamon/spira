import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCursoComponent } from './delete-curso.component';

describe('DeleteCursoComponent', () => {
  let component: DeleteCursoComponent;
  let fixture: ComponentFixture<DeleteCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
