import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpModule } from '@angular/http';
import { A2tUiModule, Angular2TokenService } from 'angular2-token';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    NgSelectModule,
    A2tUiModule,
    HttpModule,
  ],
  providers:    [ Angular2TokenService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
