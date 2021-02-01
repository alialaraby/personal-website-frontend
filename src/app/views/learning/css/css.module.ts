import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssRoutingModule } from './css-routing.module';
import { CssHomeComponent } from './css-home/css-home.component';


@NgModule({
  declarations: [CssHomeComponent],
  imports: [
    CommonModule,
    CssRoutingModule
  ]
})
export class CssModule { }
