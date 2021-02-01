import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../services/side-navbar.service';

@Component({
  selector: 'app-learning-layout',
  templateUrl: './learning-layout.component.html',
  styleUrls: ['./learning-layout.component.css']
})
export class LearningLayoutComponent implements OnInit {

  constructor(
    private sideNavService: SideNavService
  ) { }

  ngOnInit(): void {
   
  }
}
