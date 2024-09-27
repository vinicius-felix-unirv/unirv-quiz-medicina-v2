import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCriacaoQuizComponent } from './tela-criacao-quiz.component';

describe('TelaCriacaoQuizComponent', () => {
  let component: TelaCriacaoQuizComponent;
  let fixture: ComponentFixture<TelaCriacaoQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaCriacaoQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaCriacaoQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
