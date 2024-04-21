import { TestBed } from '@angular/core/testing';
import { PerguntaService } from './perguntas.service';


describe('PerguntasService', () => {
  let service: PerguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
