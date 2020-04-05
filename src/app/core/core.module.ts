import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { IfnotDirective } from './directives/ifnot.directive';

@NgModule({
  declarations: [HighlightDirective, IfnotDirective, DropdownDirective],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
