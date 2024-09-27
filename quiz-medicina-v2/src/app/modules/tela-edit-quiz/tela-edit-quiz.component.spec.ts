import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEditQuizComponent } from './tela-edit-quiz.component';

describe('TelaEditQuizComponent', () => {
  let component: TelaEditQuizComponent;
  let fixture: ComponentFixture<TelaEditQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaEditQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaEditQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
