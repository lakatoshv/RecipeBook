import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { FoodReviewsComponent } from './food-reviews/food-reviews.component';

@NgModule({
  declarations: [ReviewsListComponent, FoodReviewsComponent],
  imports: [
    CommonModule,
    ReviewsRoutingModule
  ],
  exports: [
    FoodReviewsComponent, 
    ReviewsListComponent
  ]
})
export class ReviewsModule { }
