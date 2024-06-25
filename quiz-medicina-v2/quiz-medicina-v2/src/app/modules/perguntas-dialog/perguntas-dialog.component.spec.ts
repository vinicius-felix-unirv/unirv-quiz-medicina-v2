import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerguntasDialogComponent } from './perguntas-dialog.component';

describe('PerguntasDialogComponent', () => {
  let component: PerguntasDialogComponent;
  let fixture: ComponentFixture<PerguntasDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerguntasDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerguntasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
