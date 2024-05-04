import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatQuestionComponent } from './creat-question.component';

describe('CreatQuestionComponent', () => {
  let component: CreatQuestionComponent;
  let fixture: ComponentFixture<CreatQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
