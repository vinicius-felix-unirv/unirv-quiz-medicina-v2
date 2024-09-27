import { TestBed } from '@angular/core/testing';

import { QuizAvaliativoUsuariosService } from './quiz-avaliativo-usuarios.service';

describe('QuizAvaliativoUsuariosService', () => {
  let service: QuizAvaliativoUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizAvaliativoUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
