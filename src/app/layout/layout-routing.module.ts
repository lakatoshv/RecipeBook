import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    /*
    children: [
      {
        path: "",
        loadChildren: '../shared/posts/posts.module#PostsModule'
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
        path: "registration",
        component: RegistrationComponent
      },
      {
        path: "authorization",
        component: AuthorizationComponent
      }
    ]*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
