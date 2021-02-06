import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GaugeChartModule } from 'angular-gauge-chart';
import { GaugeModule } from 'angular-gauge';
import { NgxGaugeModule } from 'ngx-gauge';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, HomeCarouselComponent, CommingSoonComponent, ProjectsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbModule,
    HttpClientModule,
    GaugeChartModule,
    GaugeModule.forRoot(),
    NgxGaugeModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
