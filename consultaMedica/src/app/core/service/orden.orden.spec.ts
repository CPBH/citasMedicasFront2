import { TestBed } from '@angular/core/testing';

import { OrdenService } from './orden.service';

describe('CitaService', () => {
  let service: OrdenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});