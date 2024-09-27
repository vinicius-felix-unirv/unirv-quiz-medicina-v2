import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPerguntasComponent } from './edit-perguntas.component';

describe('EditPerguntasComponent', () => {
  let component: EditPerguntasComponent;
  let fixture: ComponentFixture<EditPerguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPerguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPerguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
