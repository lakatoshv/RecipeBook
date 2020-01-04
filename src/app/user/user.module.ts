import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthorizationComponent } from './authorization/authorization.component';

@NgModule({
  declarations: [RegistrationComponent, AuthorizationComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    RegistrationComponent,
    AuthorizationComponent
  ]
})
export class UserModule { }
