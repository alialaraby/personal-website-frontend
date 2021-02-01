import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningLayoutComponent } from './learning-layout.component';

describe('LearningLayoutComponent', () => {
  let component: LearningLayoutComponent;
  let fixture: ComponentFixture<LearningLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
