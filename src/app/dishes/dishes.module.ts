import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesRoutingModule } from './dishes-routing.module';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { MenuModule } from '../menu/menu.module';
import { DishComponent } from './dish/dish.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [DishesListComponent, DishComponent, AddDishComponent ],
  imports: [
    CommonModule,
    DishesRoutingModule,
    MenuModule,
    ReactiveFormsModule,
    EditorModule
  ]
})
export class DishesModule { }
