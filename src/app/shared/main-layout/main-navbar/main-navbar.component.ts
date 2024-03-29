import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {

  mainNavBarUrls = [
    "/main/home",
    "/main/about",
    "/main/contact",
    "/main/coming-soon",
    "/main/projects",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
