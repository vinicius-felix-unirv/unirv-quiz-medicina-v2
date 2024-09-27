import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlternativasComponent } from './edit-alternativas.component';

describe('EditAlternativasComponent', () => {
  let component: EditAlternativasComponent;
  let fixture: ComponentFixture<EditAlternativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAlternativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAlternativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
