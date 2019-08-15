import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesRoutingModule } from './dishes-routing.module';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { MenuModule } from '../menu/menu.module';
import { DishComponent } from './dish/dish.component';

@NgModule({
  declarations: [DishesListComponent, DishComponent ],
  imports: [
    CommonModule,
    DishesRoutingModule,
    MenuModule
    
  ]
})
export class DishesModule { }
