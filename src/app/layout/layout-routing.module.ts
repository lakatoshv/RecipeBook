import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from '../default-pages/home/home.component';
import { ContactsComponent } from '../default-pages/contacts/contacts.component';
import { GalleryComponent } from '../default-pages/gallery/gallery.component';
import { AboutComponent } from '../default-pages/about/about.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "contacts",
        component: ContactsComponent
      },
      {
        path: "gallery",
        component: GalleryComponent
      },
      {
        path: "dishes",
        loadChildren: '../dishes/dishes.module#DishesModule'
      }
      /*
      {
        path: "registration",
        component: RegistrationComponent
      },
      {
        path: "authorization",
        component: AuthorizationComponent
      }
      */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
