import { AddDishComponent } from './../dishes/add-dish/add-dish.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from '../default-pages/home/home.component';
import { ContactsComponent } from '../default-pages/contacts/contacts.component';
import { GalleryComponent } from '../default-pages/gallery/gallery.component';
import { AboutComponent } from '../default-pages/about/about.component';
import { RegistrationComponent } from '../user/registration/registration.component';
import { AuthorizationComponent } from '../user/authorization/authorization.component';
import { DishesModule } from '../dishes/dishes.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'dishes',
        loadChildren: () => DishesModule
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'authorization',
        component: AuthorizationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
