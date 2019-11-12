import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesCarouselComponent } from './dishes-carousel.component';

describe('DishesCarouselComponent', () => {
  let component: DishesCarouselComponent;
  let fixture: ComponentFixture<DishesCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishesCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
