import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemoneComponent } from './itemone.component';

describe('ItemoneComponent', () => {
  let component: ItemoneComponent;
  let fixture: ComponentFixture<ItemoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
