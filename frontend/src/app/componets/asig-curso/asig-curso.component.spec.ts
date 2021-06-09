import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigCursoComponent } from './asig-curso.component';

describe('AsigCursoComponent', () => {
  let component: AsigCursoComponent;
  let fixture: ComponentFixture<AsigCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsigCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsigCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
