import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoafiliadoComponent } from './tipoafiliado.component';

describe('TipoafiliadoComponent', () => {
  let component: TipoafiliadoComponent;
  let fixture: ComponentFixture<TipoafiliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoafiliadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoafiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
