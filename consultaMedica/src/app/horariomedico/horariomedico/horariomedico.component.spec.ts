import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariomedicoComponent } from './horariomedico.component';

describe('HorariomedicoComponent', () => {
  let component: HorariomedicoComponent;
  let fixture: ComponentFixture<HorariomedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorariomedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorariomedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
