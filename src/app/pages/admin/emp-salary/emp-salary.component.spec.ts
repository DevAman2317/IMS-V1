import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSalaryComponent } from './emp-salary.component';

describe('EmpSalaryComponent', () => {
  let component: EmpSalaryComponent;
  let fixture: ComponentFixture<EmpSalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpSalaryComponent]
    });
    fixture = TestBed.createComponent(EmpSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
