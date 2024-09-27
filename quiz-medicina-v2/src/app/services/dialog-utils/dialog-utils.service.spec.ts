import { TestBed } from '@angular/core/testing';

import { DialogUtilsService } from './dialog-utils.service';

describe('DialogUtilsService', () => {
  let service: DialogUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
