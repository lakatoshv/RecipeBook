import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SubscribeFormComponent } from '../subscribe/subscribe-form/subscribe-form.component';
import { DefaultPagesModule } from '../default-pages/default-pages.module';

@NgModule({
  declarations: [
    HeaderComponent, 
    LayoutComponent, 
    FooterComponent,
    SubscribeFormComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    DefaultPagesModule
  ]
})
export class LayoutModule { }
