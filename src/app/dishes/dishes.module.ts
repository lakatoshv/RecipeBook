import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishesRoutingModule } from './dishes-routing.module';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { MenuComponent } from '../menu/menu/menu.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [DishesListComponent ],
  imports: [
    CommonModule,
    DishesRoutingModule,
    MenuModule
    
  ]
})
export class DishesModule { }
