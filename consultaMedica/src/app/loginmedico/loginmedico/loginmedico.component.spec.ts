import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmedicoComponent } from './loginmedico.component';

describe('LoginmedicoComponent', () => {
  let component: LoginmedicoComponent;
  let fixture: ComponentFixture<LoginmedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginmedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
