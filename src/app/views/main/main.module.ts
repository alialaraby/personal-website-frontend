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

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, HomeCarouselComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbModule,
    GaugeChartModule,
    GaugeModule.forRoot(),
    NgxGaugeModule
  ]
})
export class MainModule { }
