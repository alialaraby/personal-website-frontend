import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/main/home/home.component';
import { LearningLayoutComponent } from './shared/learning-layout/learning-layout.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';

const learningLayoutRoutes: Routes = [
  {
    path: 'html',
    loadChildren: () => import('./views/learning/html/html.module').then(m => m.HtmlModule)
  },
  {
    path: 'css',
    loadChildren: () => import('./views/learning/css/css.module').then(m => m.CssModule)
  }
]

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main/home',
    pathMatch: 'full'
  },
  {
    path: '', 
    component: MainLayoutComponent,
    children: [
      {
        path: 'main',
        loadChildren: () => import('./views/main/main.module').then(m => m.MainModule)
      }
    ]
  },
  {
    path: '',
    component: LearningLayoutComponent,
    children: learningLayoutRoutes
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
