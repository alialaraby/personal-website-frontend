import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ISideBarItem, NavigationService } from '../../services/navigation.service';
import { SideNavService } from '../../services/side-navbar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  //sidenavbar 
  @ViewChild('sidenav') public sidenav: MatSidenav;

  //items inside sidenavbar
  sideNavItems: ISideBarItem[];

  constructor(
    private sideNavService: SideNavService,
    private navService: NavigationService,
    private router: Router
  ) 
  { }
  
  ngAfterViewInit(): void {
    this.sideNavService.sideNavToggleSubject.subscribe(()=> {
      this.sidenav.toggle();
    });
    this.navService.learningSideBarItems$.subscribe(
      (res) => {
        this.sideNavItems = res.filter(x => x.parentUrl.includes(this.router.url));
      }
    )
  }

  events: string[] = [];
  opened: boolean;

  ngOnInit(): void { 
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(
      (val: any) => {
        this.navService.learningSideBarItems$.subscribe(
          (res) => {
            let parentUrlPart = this.getUrlParentPart(val.url);
            this.sideNavItems = res.filter(x => x.parentUrl.includes(parentUrlPart));
          }
        )

      }
    )
  }

  //open/close the sidenav
  clickMenu() { 
    this.sidenav.toggle();
  }

  navigate(sideBarItem){
    this.router.navigateByUrl(sideBarItem.url);
  }

  //to get the parent part of the current url
  getUrlParentPart(url: string){
    return url.substring(1, url.lastIndexOf('/'));
  }

  //to set active class to current sidenav item
  isItemActive(url){
    return this.router.url === url;
  }
}
