import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsCarouselComponent } from './restaurants-carousel.component';

describe('RestaurantsCarouselComponent', () => {
  let component: RestaurantsCarouselComponent;
  let fixture: ComponentFixture<RestaurantsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
