import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  sideBarItems: ISideBarItem[] = [
    {
      Id: 1, name: 'topic 1', state: true, parentUrl: '/html/html-home', url: '/html/html-itemone'
    },
    {
      Id: 2, name: 'topic 2', state: false, parentUrl: '/html/html-home', url: '/html/html-itemtwo'
    },
    {
      Id: 3, name: 'topic 3', state: false, parentUrl: '/css/css-home', url: '#'
    }
  ]

  learningSideBarItems = new BehaviorSubject<ISideBarItem[]>(this.sideBarItems);
  learningSideBarItems$ = this.learningSideBarItems.asObservable();
  
  constructor() { }
}

export interface ISideBarItem{
  Id: number;
  name: string;
  parentUrl: string;
  url: string;
  state: boolean;
}