import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionservicioComponent } from './opcionservicio.component';

describe('OpcionservicioComponent', () => {
  let component: OpcionservicioComponent;
  let fixture: ComponentFixture<OpcionservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionservicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
