import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { LearninNavItemModel } from '../../models/learning-nav-item-model';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from '../../services/side-navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mainNavBarUrls = [
    new LearninNavItemModel('HTML', '/html/html-home'),
    new LearninNavItemModel('CSS', '/css/css-home'),
    new LearninNavItemModel('Bootstrap', '/bootstrap/bootstrap-main'),
  ]
  
  constructor(
    private router: Router,
    private sideNavService: SideNavService
  ) { }

  ngOnInit(): void {
    let url = this.mainNavBarUrls.find(x => x.url.includes(this.router.url));
    console.log(url)
  }

  clickMenu() {
    this.sideNavService.toggle();
  }

  isActive(url): boolean {
    return this.getUrlParentPart(this.router.url) === this.getUrlParentPart(url);
  }

  getUrlParentPart(url: string){
    return url.substring(1, url.lastIndexOf('/'));
  }
}
