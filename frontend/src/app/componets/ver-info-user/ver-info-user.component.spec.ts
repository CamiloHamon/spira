import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoUserComponent } from './ver-info-user.component';

describe('VerInfoUserComponent', () => {
  let component: VerInfoUserComponent;
  let fixture: ComponentFixture<VerInfoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerInfoUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
