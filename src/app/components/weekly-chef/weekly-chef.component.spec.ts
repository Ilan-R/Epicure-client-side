import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyChefComponent } from './weekly-chef.component';

describe('WeeklyChefComponent', () => {
  let component: WeeklyChefComponent;
  let fixture: ComponentFixture<WeeklyChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
