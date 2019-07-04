import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribeRoutingModule } from './subscribe-routing.module';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';

@NgModule({
  declarations: [SubscribeFormComponent],
  imports: [
    CommonModule,
    SubscribeRoutingModule
  ]
})
export class SubscribeModule { }
