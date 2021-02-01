import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CssHomeComponent } from './css-home/css-home.component';


const routes: Routes = [
  {
    path: 'css-home',
    component: CssHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssRoutingModule { }
