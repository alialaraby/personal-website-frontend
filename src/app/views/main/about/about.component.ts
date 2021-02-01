import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { SkillModel } from 'src/app/shared/models/skill-model';
import { Tags } from 'src/app/shared/models/tag-enum';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  skillItems = [
    new SkillModel('HTML', 70, 'fab fa-html5', Tags.Front_End, 1500),
    new SkillModel('CSS', 70, 'fab fa-css3', Tags.Front_End, 1000),
    new SkillModel('Bootstrap', 70, 'fab fa-html5', Tags.Front_End, 750),
    new SkillModel('C#', 70, 'fab fa-html5', Tags.Back_End, 1250),
    new SkillModel('MVC', 70, 'fab fa-css3', Tags.Back_End, 2000)
  ]
  frontEndSkillItems: SkillModel[] = [];
  backEndSkillItems: SkillModel[] = []

  // frontEndSkillItems: SkillModel[] = [
  //   new SkillModel('HTML', 70, 'fab fa-html5', Tags.Front_End, 1500),
  //   new SkillModel('CSS', 70, 'fab fa-css3', Tags.Front_End, 1000),
  //   new SkillModel('Bootstrap', 70, 'fab fa-html5', Tags.Front_End, 750)
  // ];
  // backEndSkillItems: SkillModel[] = [
  //   new SkillModel('C#', 70, 'fab fa-html5', Tags.Back_End, 1250),
  //   new SkillModel('MVC', 70, 'fab fa-css3', Tags.Back_End, 2000)
  // ];

  //gauge chart settings
  gaugeType = "semi";
  gaugeCap = "round";
  gaugeThick = 20;
  gaugeForegroundColor = '#f33f3f';

  dd: string = 'redd';
  @ViewChild('componentDiv') componentDiv: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 1000) {
      setTimeout(() => {
        this.frontEndSkillItems = this.skillItems.filter(x => x.tag === 0);
        this.backEndSkillItems = this.skillItems.filter(x => x.tag === 1);
      }, 300);
    } 
    // else if (number < 10) {
    // }
  }

  scroll(element: HTMLElement){
    element.scrollIntoView({ behavior: 'smooth', block: 'center',})
  }
}
