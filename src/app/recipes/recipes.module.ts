import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { SpecialRecipesComponent } from './special-recipes/special-recipes.component';

@NgModule({
  declarations: [SpecialRecipesComponent],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
