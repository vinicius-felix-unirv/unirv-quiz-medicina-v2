import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryScreenComponent } from './category-screen.component';

describe('CategoryScreenComponent', () => {
  let component: CategoryScreenComponent;
  let fixture: ComponentFixture<CategoryScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryScreenComponent]
    });
    fixture = TestBed.createComponent(CategoryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
