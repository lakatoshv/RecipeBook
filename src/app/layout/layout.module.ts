import { SubscribeModule } from './../subscribe/subscribe.module';
import { UserModule } from './../user/user.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DefaultPagesModule } from '../default-pages/default-pages.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    DefaultPagesModule,
    ReactiveFormsModule,
    FormsModule,
    UserModule,
    SubscribeModule
  ],
})
export class LayoutModule { }
