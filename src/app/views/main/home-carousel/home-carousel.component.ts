import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeCarouselComponent implements OnInit {

  images =[
    "assets/images/slide_01.jpg",
    "assets/images/slide_02.jpg",
    "assets/images/slide_03.jpg",
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
