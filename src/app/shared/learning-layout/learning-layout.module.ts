import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LearningLayoutComponent } from './learning-layout.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { SideNavService } from '../services/side-navbar.service';
@NgModule({
  declarations: [NavbarComponent, SidebarComponent, LearningLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [SideNavService]
})
export class LearningLayoutModule {}
 