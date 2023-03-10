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
import { EditDishComponent } from './edit-dish/edit-dish.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DishPreviewComponent } from './dish-preview/dish-preview.component';


@NgModule({
  declarations: [DishesListComponent, DishComponent, AddDishComponent, DishDescriptionComponent, EditDishComponent, DishPreviewComponent ],
  imports: [
    CommonModule,
    DishesRoutingModule,
    MenuModule,
    ReactiveFormsModule,
    EditorModule,
    ReviewsModule,
    NgSelectModule,
    FormsModule,
    NgxPaginationModule
  ],
})
export class DishesModule { }
