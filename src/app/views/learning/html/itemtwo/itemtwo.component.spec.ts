import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemtwoComponent } from './itemtwo.component';

describe('ItemtwoComponent', () => {
  let component: ItemtwoComponent;
  let fixture: ComponentFixture<ItemtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
