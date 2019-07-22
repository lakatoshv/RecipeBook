import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishesListComponent } from './dishes-list/dishes-list.component';

const routes: Routes = [
  {
    path: "",
    component: DishesListComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule { }
