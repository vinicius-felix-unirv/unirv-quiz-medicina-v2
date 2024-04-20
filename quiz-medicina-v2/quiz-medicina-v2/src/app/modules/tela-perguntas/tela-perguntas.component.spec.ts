import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPerguntasComponent } from './tela-perguntas.component';

describe('TelaPerguntasComponent', () => {
  let component: TelaPerguntasComponent;
  let fixture: ComponentFixture<TelaPerguntasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaPerguntasComponent]
    });
    fixture = TestBed.createComponent(TelaPerguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
