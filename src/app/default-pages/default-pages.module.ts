import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MenuComponent } from '../menu/menu/menu.component';
import { SpecialRecipesComponent } from '../recipes/special-recipes/special-recipes.component';
import { ReviewsListComponent } from '../reviews/reviews-list/reviews-list.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent, 
    GalleryComponent, 
    ContactsComponent,
    MenuComponent, 
    SpecialRecipesComponent,
    ReviewsListComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DefaultPagesModule { }
