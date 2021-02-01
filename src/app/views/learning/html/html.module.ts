import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlRoutingModule } from './html-routing.module';
import { HtmlHomeComponent } from './html-home/html-home.component';
import { ItemoneComponent } from './itemone/itemone.component';
import { ItemtwoComponent } from './itemtwo/itemtwo.component';


@NgModule({
  declarations: [HtmlHomeComponent, ItemoneComponent, ItemtwoComponent],
  imports: [
    CommonModule,
    HtmlRoutingModule
  ]
})
export class HtmlModule { }
