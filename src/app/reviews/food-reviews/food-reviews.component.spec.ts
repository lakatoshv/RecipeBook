import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodReviewsComponent } from './food-reviews.component';

describe('FoodReviewsComponent', () => {
  let component: FoodReviewsComponent;
  let fixture: ComponentFixture<FoodReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
