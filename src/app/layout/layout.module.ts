import { AuthorizationComponent } from './../user/authorization/authorization.component';
import { UserModule } from './../user/user.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SubscribeFormComponent } from '../subscribe/subscribe-form/subscribe-form.component';
import { DefaultPagesModule } from '../default-pages/default-pages.module';
import { RegistrationComponent } from '../user/registration/registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent, 
    LayoutComponent, 
    FooterComponent,
    SubscribeFormComponent,
    RegistrationComponent,
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    DefaultPagesModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class LayoutModule { }
