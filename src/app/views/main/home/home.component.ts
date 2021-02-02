import { Component, OnInit } from '@angular/core';
import { MainLessonCardModel } from 'src/app/shared/models/main-lesson-card-model';
import { Tags } from 'src/app/shared/models/tag-enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  active = 1;
  lessonCardItems: MainLessonCardModel[] = [
    new MainLessonCardModel('html & html5', Tags.Front_End, ['/html/html-home']),
    new MainLessonCardModel('css & css3', Tags.Front_End, ['a', 'b']),
    new MainLessonCardModel('Bootstrap', Tags.Front_End, ['a', 'b']),
    new MainLessonCardModel('C#', Tags.Back_End, ['a', 'b'])
  ]
  filteredLessonCardItems: MainLessonCardModel[] = [];
  constructor() { }

  ngOnInit(): void {
    this.filteredLessonCardItems = this.lessonCardItems;
  }

  //filters the learning cards in the home page
  onTabChange(event: any){
    this.filteredLessonCardItems = this.lessonCardItems;
    let tabText = event.target.text as string;
    let tag: Tags;
    if(tabText.includes('front') || tabText.includes('Front'))
      tag = Tags.Front_End;
    else if(tabText.includes('back') || tabText.includes('Back'))
      tag = Tags.Back_End;
    else 
      tag = Tags.All;
    if(tag !== Tags.All)
      this.filteredLessonCardItems = this.filteredLessonCardItems.filter(x => x.tag === tag);
  }

}
