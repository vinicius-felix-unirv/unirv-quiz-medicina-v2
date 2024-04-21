import { TestBed } from '@angular/core/testing';

import { PerguntanivelService } from './perguntanivel.service';

describe('PerguntanivelService', () => {
  let service: PerguntanivelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerguntanivelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
