import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishComponent } from './dish/dish.component';
import { AddDishComponent } from './add-dish/add-dish.component';

const routes: Routes = [
  {
    path: "",
    component: DishesListComponent
  },
  {
    path: ":id",
    component: DishComponent
  },
  {
    path: ":type/:id",
    component: DishComponent
  },
  {
    path: "add",
    component: AddDishComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule { }
