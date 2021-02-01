import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MainNavbarComponent, FooterComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MainLayoutModule { }
