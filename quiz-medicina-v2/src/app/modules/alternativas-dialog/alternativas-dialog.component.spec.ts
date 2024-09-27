import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativasDialogComponent } from './alternativas-dialog.component';

describe('AlternativasDialogComponent', () => {
  let component: AlternativasDialogComponent;
  let fixture: ComponentFixture<AlternativasDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternativasDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlternativasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
