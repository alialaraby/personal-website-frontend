import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlHomeComponent } from './html-home/html-home.component';
import { ItemoneComponent } from './itemone/itemone.component';
import { ItemtwoComponent } from './itemtwo/itemtwo.component';


const routes: Routes = [
  {
    path: 'html-home',
    component: HtmlHomeComponent
  },
  {
    path: 'html-itemone',
    component: ItemoneComponent
  },
  {
    path: 'html-itemtwo',
    component: ItemtwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlRoutingModule { }
