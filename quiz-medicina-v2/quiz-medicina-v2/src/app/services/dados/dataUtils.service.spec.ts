import { TestBed } from '@angular/core/testing';

import { DataUtilsService } from './dataUtils.service';

describe('DadosService', () => {
  let service: DataUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
