import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesRoutingModule } from './dishes-routing.module';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { MenuModule } from '../menu/menu.module';
import { DishComponent } from './dish/dish.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { DishDescriptionComponent } from './dish-description/dish-description.component';
import { ReviewsModule } from '../reviews/reviews.module';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [DishesListComponent, DishComponent, AddDishComponent, DishDescriptionComponent ],
  imports: [
    CommonModule,
    DishesRoutingModule,
    MenuModule,
    ReactiveFormsModule,
    EditorModule,
    ReviewsModule,
    NgSelectModule,
    FormsModule
  ]
})
export class DishesModule { }
