import { ReviewsModule } from './../reviews/reviews.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SpecialRecipesComponent } from '../recipes/special-recipes/special-recipes.component';
import { ReviewsListComponent } from '../reviews/reviews-list/reviews-list.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [
    HomeComponent, 
    GalleryComponent, 
    ContactsComponent,
    SpecialRecipesComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MenuModule,
    ReviewsModule
  ],
  exports: []
})
export class DefaultPagesModule { }
