import { TestBed } from '@angular/core/testing';

import { ProgressoPerguntasService } from './progresso-perguntas.service';

describe('ProgressoPerguntasService', () => {
  let service: ProgressoPerguntasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressoPerguntasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
