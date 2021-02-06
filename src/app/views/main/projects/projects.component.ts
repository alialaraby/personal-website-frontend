import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    { 
      name: 'Smart Audit', shortDescription: 'automated inspection software', 
      date: 'Sept 2020 - Present', imgSrc: 'assets/images/projects/smart-audit.png', 
      link: null
    },
    { 
      name: 'Comunita', shortDescription: 'compound services in hand', 
      date: 'June 2020 - Sept 2020', imgSrc: 'assets/images/projects/comunita.jpeg', 
      link: null
    },
    { 
      name: 'TimeShare', shortDescription: 'vacation ownership software', 
      date: 'Dec 2019 - Mar 2020', imgSrc: 'assets/images/projects/timeshare.png', 
      link: 'https://www.rpaegypt.com/timeshare/'
    },
    { 
      name: 'Bookup', shortDescription: 'hotel reservation system', 
      date: 'Aug 2019 - Jan 2020', imgSrc: 'assets/images/projects/bookup.png', 
      link: 'http://www.bookupupsell.com/'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  scroll(element: HTMLElement){
    let bounds = element.getBoundingClientRect();
    window.scrollTo({
      top: bounds.top - 100,
      behavior: 'smooth'
    });
  }
}
