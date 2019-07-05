import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from '../menu/menu/menu.component';
import { AboutComponent } from './about/about.component';
import { SpecialRecipesComponent } from '../recipes/special-recipes/special-recipes.component';
import { ReviewsListComponent } from '../reviews/reviews-list/reviews-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SubscribeFormComponent } from '../subscribe/subscribe-form/subscribe-form.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    LayoutComponent, 
    MenuComponent, 
    AboutComponent, 
    SpecialRecipesComponent,
    ReviewsListComponent,
    FooterComponent,
    SubscribeFormComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ]
})
export class LayoutModule { }
