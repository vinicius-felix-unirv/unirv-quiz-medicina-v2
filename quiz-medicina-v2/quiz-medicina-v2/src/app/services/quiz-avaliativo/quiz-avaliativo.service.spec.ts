import { TestBed } from '@angular/core/testing';

import { QuizAvaliativoService } from './quiz-avaliativo.service';

describe('QuizAvaliativoService', () => {
  let service: QuizAvaliativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizAvaliativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
