import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatAlternativeComponent } from './creat-alternative.component';

describe('CreatAlternativeComponent', () => {
  let component: CreatAlternativeComponent;
  let fixture: ComponentFixture<CreatAlternativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatAlternativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
